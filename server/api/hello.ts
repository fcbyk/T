import { MongoClient } from 'mongodb'

export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig()
  const mongodbUri = config.mongodbUri as string || ''

  if (!mongodbUri) {
    return {
      success: false,
      message: 'NUXT_MONGODB_URI 环境变量未配置'
    }
  }

  let client
  try {
    // 创建 MongoDB 客户端连接
    client = new MongoClient(mongodbUri)
    await client.connect()

    // 选择数据库和集合
    const db = client.db('hello_world')
    const collection = db.collection('messages')

    // 插入一条消息记录
    const result = await collection.insertOne({
      content: 'Hello from MongoDB Atlas!',
      created_at: new Date().toISOString()
    })

    return {
      success: true,
      message: '数据插入成功',
      insertedId: result.insertedId
    }
  } catch (error) {
    return {
      success: false,
      message: error instanceof Error ? error.message : '未知错误'
    }
  } finally {
    // 关闭数据库连接
    if (client) {
      await client.close()
    }
  }
})
