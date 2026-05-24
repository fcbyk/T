from mcp.server import Server
from mcp.server.stdio import stdio_server
from mcp.server.models import InitializationOptions
from mcp.types import Tool, TextContent
import asyncio

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

# 创建 MCP Server
server = Server("fcbyk-decrypt-tools")

# tools/list
@server.list_tools()
async def list_tools():
    return [
        Tool(
            name="decrypt",
            description="Decrypt text using fcbyk algorithm",
            inputSchema={
                "type": "object",
                "properties": {
                    "text": {"type": "string"}
                },
                "required": ["text"]
            }
        )
    ]

# tools/call
@server.call_tool()
async def call_tool(name: str, arguments: dict):
    if name == "decrypt":
        text = arguments.get("text", "")
        result = decrypt(text)

        return [
            TextContent(
                type="text",
                text=result
            )
        ]

    return [
        TextContent(
            type="text",
            text=f"unknown tool: {name}"
        )
    ]


# stdio 启动入口
async def main():
    async with stdio_server() as (read_stream, write_stream):
        await server.run(
            read_stream,
            write_stream,
            InitializationOptions(
                server_name="fcbyk-decrypt-tools",
                server_version="1.0.0",
                capabilities={}
            )
        )


if __name__ == "__main__":
    asyncio.run(main())