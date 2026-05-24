# demo90

## 快速开始

### 1. 配置 MongoDB Atlas

1. 登录 [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
2. 创建一个免费的 M0 集群
3. 在 "Database Access" 中创建数据库用户
4. 在 "Network Access" 中添加你的 IP 地址（或允许所有 IP：0.0.0.0/0）
5. 点击 "Connect" → "Connect your application"
6. 复制连接字符串

### 2. 配置环境变量

复制 `.env.example` 为 `.env`：

```bash
cp .env.example .env
```

编辑 `.env` 文件，填入你的 MongoDB Atlas 连接字符串：

```env
NUXT_MONGODB_URI=mongodb+srv://<username>:<password>@<cluster>.mongodb.net/hello_world?retryWrites=true&w=majority
```