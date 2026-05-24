from flask import Flask, request, Response, jsonify
from response import handle_initialize, handle_tools_list, handle_tools_call
import json
import queue

app = Flask(__name__)

event_queue = queue.Queue()

# SSE 通道
@app.route('/mcp', methods=['GET'])
def mcp_sse():
    def stream():
        while True:
            try:
                data = event_queue.get(timeout=5)
                print("SSE SEND:", data, flush=True)
                yield f"data: {json.dumps(data)}\n\n"
            except:
                # 心跳
                yield ":\n\n"

    return Response(
        stream(),
        mimetype="text/event-stream",
        headers={
            "Cache-Control": "no-cache",
            "Connection": "keep-alive"
        }
    )



# MCP 请求入口
@app.route('/mcp', methods=['POST'])
def mcp_post():
    try:
        if not request.is_json:
            return jsonify({
                "jsonrpc": "2.0",
                "id": None,
                "error": {
                    "code": -32600,
                    "message": "Content-Type must be application/json"
                }
            })

        req = request.get_json()
        print("REQ:", req, flush=True)

        if not req or "method" not in req:
            return jsonify({
                "jsonrpc": "2.0",
                "id": None,
                "error": {
                    "code": -32600,
                    "message": "Invalid Request"
                }
            })

        method = req.get("method")

        if method == "initialize":
            res = handle_initialize(req)

        elif method == "tools/list":
            res = handle_tools_list(req)

        elif method == "tools/call":
            params = req.get("params", {})
            args = params.get("arguments", {})

            if isinstance(args, str):
                args = json.loads(args)

            req["params"]["arguments"] = args

            res = handle_tools_call(req)

        else:
            res = {
                "jsonrpc": "2.0",
                "id": req.get("id"),
                "error": {
                    "code": -32601,
                    "message": "Method not found"
                }
            }

        # 强制补字段
        res.setdefault("jsonrpc", "2.0")
        res.setdefault("id", req.get("id"))

        # 推送到 SSE（核心）
        event_queue.put(res)

        # 同时 HTTP 返回
        return jsonify(res)

    except Exception as e:
        err = {
            "jsonrpc": "2.0",
            "id": req.get("id") if 'req' in locals() else None,
            "error": {
                "code": -32603,
                "message": str(e)
            }
        }

        print("ERROR:", err, flush=True)
        event_queue.put(err)

        return jsonify(err)


if __name__ == "__main__":
    print("MCP SSE Server started on port 8080")
    print("SSE Endpoint: http://127.0.0.1:8080/mcp (GET)")
    print("POST Endpoint: http://127.0.0.1:8080/mcp (POST)")
    app.run(host='0.0.0.0', port=8080, threaded=True)