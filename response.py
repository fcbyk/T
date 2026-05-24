import json
# 实践踩坑：MCP使用相对导入会报错，py脚本中不能使用相对导入
from crypt import decrypt

def send(resp):
    print(json.dumps(resp), flush=True)


def handle_initialize(req):
    """
    初始化请求
        客户端连接到服务器时的第一个请求
        用于建立连接和协商能力（capabilities）
        服务器返回其支持的功能特性
    """
    return {
        "jsonrpc": "2.0",
        "id": req["id"],
        "result": {
            # 实践踩坑：灵码报错后添加
            "protocolVersion": "2024-11-05",  # MCP 协议版本

            # 实践踩坑：rae报错后添加
            "serverInfo": {
                "name": "fcbyk-decrypt-tools",
                "version": "1.0.0"
            },
            "capabilities": {
                "tools": {}    
            }
        }
    }


def handle_tools_list(req):
    """
    工具列表请求
        获取服务器提供的所有可用工具
        客户端通过这个请求了解可以调用哪些功能
        返回工具的元数据（名称、描述、参数 schema）
    """
    return {
        "jsonrpc": "2.0",
        "id": req["id"],
        "result": {
            "tools": [
                {
                    "name": "decrypt",
                    "description": "Decrypt text for fcbyk",
                    "inputSchema": {
                        "type": "object",
                        "properties": {
                            "text": {"type": "string"},
                        },
                        "required": ["text"]
                    }
                }
            ]
        }
    }


def handle_tools_call(req):
    """
    工具调用请求
        实际执行某个工具的功能
        客户端指定要调用的工具名称和参数
        服务器执行并返回结果
    """
    name = req["params"]["name"]
    args = req["params"]["arguments"]

    text = args["text"]

    if name == "decrypt":
        result = decrypt(text)
        return_resp = {
            "content": [
                {
                    "type": "text",
                    "text": result
                }
            ]
        }

    else:
        return_resp = {
            "content": [
                {
                    "type": "text",
                    "text": "unknown tool"
                }
            ]
        }

    return {
        "jsonrpc": "2.0",
        "id": req["id"],
        "result": return_resp
    }