from mcp.server.fastmcp import FastMCP

mcp = FastMCP("fcbyk-decrypt-tools")

# 解密工具
@mcp.tool()
def decrypt(text: str) -> str:
    keys = [4, 7, 2]
    result = ""
    key_len = len(keys)

    for i, ch in enumerate(text):
        if ch.isalpha():
            base = ord('a')
            offset_base = ord(ch.lower()) - base
            key = keys[i % key_len]
            offset = (offset_base - key) % 26
            result += chr(base + offset)
        else:
            result += ch

    return result

# 启动 MCP Server
if __name__ == "__main__":
    mcp.run()   # 子进程 stdio 模式
    # mcp.run(transport="streamable-http")  # HTTP 模式
