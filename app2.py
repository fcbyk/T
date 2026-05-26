import requests
import json

# https://platform.deepseek.com/ 获取api_key
api_key = ""

class reqData:
   def __init__(self):
      self.url = "https://api.deepseek.com/chat/completions"
      self.headers = {
         'Authorization': f'Bearer {api_key}',
         'Content-Type': 'application/json',
      }
      self.payload = {
         "messages": [
               {
                  "content": "You are a helpful assistant",
                  "role": "system"
               }
         ],
         "model": "deepseek-chat",
         "stream": True
      }

   def addMsg(self, msg):
      self.payload["messages"].append({
         "content": msg,
         "role": "user"
      })

req = reqData()


def deepseek(msg):
   req.addMsg(msg)
   try:
      response = requests.post(
         url=req.url,
         headers=req.headers,
         data=json.dumps(req.payload),
         timeout=20,
         stream=True
      )

      print('AI: ', end='', flush=True)
      for line in response.iter_lines():
         if line:
            line_str = line.decode('utf-8')

            # 跳过不是data开头的行
            if not line_str.startswith('data: '):
               continue

            data = line_str[6:]  # 去掉 "data: " 前缀

            if data.strip() == '[DONE]':
               break

            chunk = json.loads(data)
            delta = chunk['choices'][0]['delta'].get('content', '')
            if delta:  # 只打印非空内容
               print(delta, end='', flush=True)

      print()  # 响应结束后换行

   except Exception as e:
      print(e)


while True:
   Qstr = input("You: ")

   if Qstr == "exit":  # 先检查退出
      break

   deepseek(Qstr)


