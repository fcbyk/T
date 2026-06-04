import sys, json

# Rust ↔ Python 双向通信：stdin 收请求，stdout 返回 JSON 结果
# stdout/stderr 被 Rust 截获
try:
    data = json.loads(sys.stdin.read())
    command = data.get("command", "")
    args = data.get("args", [])

    result = {"status": "ok", "command": command, "output": " ".join(args)}
    print(json.dumps(result))

except Exception as e:
    print(json.dumps({"status": "error", "message": str(e)}))
