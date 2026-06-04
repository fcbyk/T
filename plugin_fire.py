import sys, json

# Rust 投递命令 → Python 直接输出终端，不通过管道回传
# stderr 走终端、stdout 走终端，Rust 不截获

try:
    data = json.loads(sys.stdin.read())
    cmd = data.get("cmd", "echo hello")
    import subprocess
    subprocess.run(cmd, shell=True)
except Exception as e:
    import sys
    print(f"[plugin error] {e}", file=sys.stderr)
    sys.exit(1)
