/**
 可选类型与解包
 赋值 (=) 是把一个值存入变量或常量。
 解包 是从 Optional<T> 中取出内部的 T ，得到一个 非可选 的值，以便后续可以直接使用该值的属性或方法。
*/

let optionalInt: Int? = 42          // 可选整数
let value = optionalInt!            // 强制解包后赋值给非可选的 `value`
print(value)                        // 输出: 42

// 可选绑定 (Optional Binding) 示例
let optionalString: String? = "Hello Swift"
if let unwrapped = optionalString {
    print("可选绑定得到的值: \(unwrapped)")
}

// guard 可选绑定示例
func greet(_ name: String?) {
    guard let name = name else {
        print("没有提供名字")
        return
    }
    print("你好, \(name)!")
}
greet(nil)
greet("张三")

// 可选链 (Optional Chaining) 示例
class Person {
    var pet: Pet?
}
class Pet {
    var name: String?
    var age: Int?
}
let person = Person()
person.pet = Pet()
person.pet?.name = "小狗"
let petName = person.pet?.name ?? "无名"
print("宠物名字: \(petName)")
