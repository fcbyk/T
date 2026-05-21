/**
 * 空值（Nullable）与非空（Non-null）
 * Kotlin 强制区分 可空类型 和 非空类型，避免 NullPointerException
 * ? 表示变量可以为 null
 */

var name: String = "小明" // 非空，不能赋 null
// name = null // 错误

var nickname: String? = null // 可空
nickname = "小可"


/**
 * 访问可空变量时，需要安全操作符 ?. 或非空断言 !!
 */
var a:String? = null
println(a?.length) // 安全调用，如果 null 返回 null

a = "hello world"
println(a!!.length) // 非空断言，如果 null 会抛异常