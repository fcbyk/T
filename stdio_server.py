import sys
import json
from response import send, handle_initialize, handle_tools_list, handle_tools_call

def main():
    # 实践踩坑：不能输出任何非json文本（trae报错）
    # print("Server started. Waiting for requests...")

    while True:
        line = sys.stdin.readline()
        if not line:
            break

        try:
            req = json.loads(line)
            method = req.get("method")

            if method == "initialize":
                res = handle_initialize(req)

            elif method == "tools/list":
                res = handle_tools_list(req)

            elif method == "tools/call":
                res = handle_tools_call(req)

            else:
                res = {
                    "jsonrpc": "2.0",
                    "id": req.get("id"),
                    "error": {"message": "unknown method"}
                }

        except Exception as e:
            res = {
                "jsonrpc": "2.0",
                "id": None,
                "error": {"message": str(e)}
            }

        send(res)


if __name__ == "__main__":
    main()


"""
测试请求
{"jsonrpc": "2.0", "id": 1, "method": "initialize", "params": {}}
{"jsonrpc": "2.0", "id": 2, "method": "tools/list", "params": {}}
{"jsonrpc": "2.0", "id": 3, "method": "tools/call", "params": {"name": "decrypt", "arguments": {"text": "llnpv avtpk"}}}
"""