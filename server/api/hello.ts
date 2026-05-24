import { createClient } from '@supabase/supabase-js'

export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig()
  const supabaseUrl = config.supabaseUrl || ''
  const supabaseKey = config.supabaseKey || ''

  if (!supabaseUrl || !supabaseKey) {
    return {
      success: false,
      message: 'SUPABASE_URL 和 SUPABASE_ANON_KEY 读取失败'
    }
  }

  const supabase = createClient(supabaseUrl, supabaseKey)

  const { data, error } = await supabase
    .from('messages')
    .insert([{ content: 'Hello!', created_at: new Date().toISOString() }])
    .select()

  if (error) {
    return { success: false, message: error.message }
  }

  return { success: true, data }
})
