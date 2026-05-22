/**
 * 基本输入输出
 * print 用于在控制台输出信息。
 * readLine() 用于读取用户在控制台输入的字符串，随后可根据需要转换为其他类型（如 Int ）。
 */
 
print("请输入你的名字:")
if let name = readLine() {
    print("你好, \(name)!")
}

print("请输入一个整数:")
if let line = readLine(), let number = Int(line) {
    print("你输入的整数是 \(number)")
}

/// 语句结束：分号 ;
/// 1️⃣ 一行一句 → 不用写分号（官方推荐）
/// 2️⃣ 一行多句 → 必须写分号分隔
/// 3️⃣ 行尾写分号也不报错（兼容写法）
_ = {
    // 不加分号
    let a = 10
    let b = 20

    // 一行写多个，必须加分号
    let c = 10; let d = 20

    // 写了也不报错（兼容 C++/JS 写法）
    let e = 30;
}()