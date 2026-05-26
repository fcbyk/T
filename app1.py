import requests
import json

# https://platform.deepseek.com/ 获取api_key
api_key = ""
url = "https://api.deepseek.com/chat/completions"
headers = {
   'Authorization': f"Bearer {api_key}",
   'Content-Type': 'application/json',
}
payload = {
   "messages": [
         {
            "content": "You are a helpful assistant",
            "role": "system"
         }
   ],
   "model": "deepseek-chat",
   "stream": False
}


def deepseek(msg):
   payload["messages"].append({
      "content": msg,
      "role": "user"
   })

   try:
      response = requests.post(
         url = url,
         headers = headers,
         data = json.dumps(payload),
         timeout = 20
      ).json()

      return response["choices"][0]["message"]["content"]
   except Exception as e:
      print(e)


while True:
   Qstr = input("You: ")

   if Qstr == "exit":
      break

   print("AI: ",deepseek(Qstr))

