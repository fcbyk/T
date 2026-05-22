/// 字面量（Literal）
/// 直接写在代码中的固定值，例如：10、3.14、"Hello"、true 等


_ = {
    //  整数字面量
    let age = 18          // 18 → 整数字面量
    let score = 100       // 100 → 整数字面量

    // 浮点数字面量
    let pi = 3.1415926    // 3.1415926 → 浮点数字面量
    let height = 1.75
    
    // 进制字面量（二进制、八进制、十六进制）
    let bin = 0b1010                  // 二进制 10
    let oct = 0o777                   // 八进制
    let hex = 0xFF                    // 十六进制 255

    // 布尔字面量（只有 true / false）
    let isStudent = true  // true → 布尔字面量
    let isMan = false

    // 字符串字面量（双引号包裹）
    let name = "小明"      // "小明" → 字符串字面量
    let text = "Hello World"

    // 字符字面量（单个字符，必须标注 Character）
    let letter: Character = "B"  // "B" → 字符字面量

    // 字符串插值字面量（在字符串里插入变量）
    let 名字 = "Swift"
    let version = 6
    let interpolatedStr = "我是 \(名字)，版本 \(version)"
    
    // 多行字符串字面量
    let multiLineStr = """
    第一行内容
    第二行内容
    第三行内容
    """
    
    // 扩展分隔符字符串字面量（#" "#，不转义\）
    let rawStr = #"换行符是 \n 不会真的换行"#
    let rawStr2 = #"引号"直接写"#

    // nil 字面量（空值字面量，仅用于可选类型）
    var optionalInt: Int? = nil       // nil 是字面量
    var optionalStr: String? = nil
}()


_ = {
    // 数组字面量,和 JS/TS 完全一样！
    var nums = [1, 2, 3, 4, 5]        // Int 数组，自动推断
    var names = ["张三", "李四", "王五"] // String 数组

    // 类型注解写法（TS 一模一样）
    var scores: [Int] = [90, 85, 100]

    // 增删改
    nums.append(6)        // 加元素
    names[0] = "小张"     // 修改第一个元素

    // 元组 ( )
    let person = ("张三", 18, 1.75)   // 自动推断 (String, Int, Double)

    // 元组取值（按索引）
    let name1 = person.0
    let age1 = person.1

    // 带名称的元组（更清晰）
    let student = (name: "李四", age: 20, score: 95)
    let name2 = student.name
    let age2 = student.age

    // 字典字面量 [key: value]
    var userInfo = [
        "name": "小明",
        "age": "20",
        "city": "北京"
    ]

    // 类型注解
    var map: [String: Int] = [
        "math": 90,
        "english": 85
    ]

    // 取值/赋值
    userInfo["name"] = "小红"
    let score = map["math"]

    // 空集合字面量（必须写类型）
    let emptyArr: [Int] = []          // 空数组
    let emptyDict: [String: String] = [:] // 空字典
}


_ = {
    // 闭包字面量（{} 就是闭包的字面量）
    let simpleClosure = {
        print("我是闭包字面量")
    }
    let closureWithParam: (String) -> Void = { msg in
        print(msg)
    }
}()


// Swift 直接写“对象”字面量（像JS一样，不用类）
// 两种方式：字典 / 元组
_ = {
    
    // 最像 JS 对象：字典 [String: Any]
    // 定义一个“带函数的字典对象”
    let person: [String: Any] = [
        "name": "小明",
        "age": 18,
        "sayHello": {
            print("你好，我是小明")
        },
        "add": { (a: Int, b: Int) -> Int in
            return a + b
        }
    ]
    
    // 取值（比较麻烦）
    let name = person["name"] as? String ?? ""
    let age = person["age"] as? Int ?? 0

    // 取出并调用函数
    // 因为是 Any，需要用 as 强转类型
    if let sayHello = person["sayHello"] as? () -> Void {
        sayHello() // 输出：你好，我是小明
    }

    if let add = person["add"] as? (Int, Int) -> Int {
        let result = add(10, 20)
        print("10+20 = \(result)") // 输出：10+20 = 30
    }
    
    
    // 更安全、更推荐：元组（自带键名）
    let student = (
        name: "小红",
        age: 20,
        score: 95
    )
    
    // 和 JS 对象.属性 完全一样
    let stuName = student.name
    let stuAge = student.age
    let stuScore = student.score

    // 定义一个【自带函数的元组】（像 JS 对象一样）
    let obj = (
        name: "小明",
        age: 18,
        // 直接存函数/闭包 ✅
        sayHello: {
            print("你好，我是小明！")
        },
        // 带参数、带返回值的函数 ✅
        add: { (a: Int, b: Int) -> Int in
            return a + b
        }
    )

    // 2. 直接使用！！！不需要 as 强转！！！
    print(obj.name)
    obj.sayHello()
    
    let sum = obj.add(10, 20)
    print("10 + 20 = \(sum)")
}()