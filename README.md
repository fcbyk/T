# demo91

## 子进程模式

> 客户端自己启动服务
- 拷贝到ai客户端的json，路径自行修改，win使用python
```json
{
  "mcpServers": {
    "fcbyk-decrypt-tools": {
      "command": "python3",
      "args": ["/Users/coke/repo/T/stdio_server.py"],
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
      "url": "http://127.0.0.1:8080/mcp"
    }
  }
}
```

## 测试用例
1. llnpv avtpk，解密一下这个文本，使用fcbyk mcp
2. 解密 nhxezevprx，fcbyk的密码
3. 解密 wltzlt zveyvik. dcmakrn jvt ygubgwau...