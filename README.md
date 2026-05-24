# demo92

## 子进程 stdio 模式

> 客户端自己启动服务
- 拷贝到ai客户端的json，路径自行修改，win使用python
- 如果提示找不到mcp包，请使用绝对路径的Python 解释器
```json
{
  "mcpServers": {
    "fcbyk-decrypt-tools": {
      "command": "/usr/local/bin/python3",
      "args": ["/Users/coke/repo/T/server1.py"],
      "env": {}
    }
  }
}
```

## http模式

> 客户端通过http请求服务
- 需要手动启动服务
```json
{
  "mcpServers": {
    "fcbyk-decrypt-tools": {
      "url": "http://127.0.0.1:8000/mcp"
    }
  }
}
```

## 测试用例
1. llnpv avtpk，解密一下这个文本，使用fcbyk mcp
2. 解密 nhxezevprx，fcbyk的密码
3. 解密 wltzlt zveyvik. dcmakrn jvt ygubgwau...

## MCP Python SDK

```bash
pip install mcp
```

* `mcp` 是 MCP 官方 Python SDK
* 同一个包同时提供：

  * FastMCP（高层封装，推荐用于工具开发）
  * Server API（底层协议实现，用于深入控制 MCP 行为）
* 安装后即可支持：

  * stdio 模式（本地子进程通信）
  * streamable HTTP 模式（远程服务）

## 🔥 FastMCP vs Server API 对比

| 维度        | FastMCP（高层封装）          | Server API（底层实现）              |
| --------- | ---------------------- | ----------------------------- |
| 开发方式      | 使用 `@mcp.tool()` 声明式定义 | 手动实现 `list_tools / call_tool` |
| 工具注册      | 自动注册函数为工具              | 显式构造 `Tool` 对象                |
| Schema 生成 | 自动推导参数结构               | 手动编写 JSON Schema              |
| 请求路由      | 自动分发 tool 调用           | 手动实现工具分发逻辑                    |
| Transport | `mcp.run()` 一行启动       | 手动管理 `stdio_server()`         |
| 抽象层级      | 应用层（开发工具逻辑）            | 协议层（实现 MCP 机制）                |
| 代码复杂度     | ⭐ 低（极简开发）              | ⭐⭐⭐⭐ 高（需要理解协议）                |
| 灵活性       | 中等（受框架约束）              | 很高（完全可控）                      |
| 学习价值      | 入门 / 快速开发              | ⭐⭐⭐⭐⭐ 协议理解 / 底层原理             |