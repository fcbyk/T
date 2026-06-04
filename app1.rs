// === Rust 结构体基础 ===
//
// struct 类似其他语言的 class / record，把多个具名字段组合在一起。
// Rust 的结构体不继承，方法通过 impl 块单独定义（见 app4）。
//
// 对比 JS:  const user = { name: "...", age: 30 }
// 对比 Go:  type User struct { Name string; Age int }

// 定义结构体
struct User {
    name: String,
    age: u8,
    active: bool,
}

fn main() {
    // —— 实例化（所有字段都要初始化） ——
    let user1 = User {
        name: String::from("张三"),
        age: 30,
        active: true,
    };

    // —— 字段访问 ——
    println!("{}，{} 岁，活跃: {}", user1.name, user1.age, user1.active);

    // —— 字段可变性跟着变量走 ——
    // 变量是 mut 的，字段才能改。没有"部分可变字段"的语法。
    let mut user2 = User {
        name: String::from("李四"),
        age: 25,
        active: false,
    };
    user2.age = 26;
    user2.active = true;
    println!("修改后: {}，{} 岁", user2.name, user2.age);

    // —— 构造语法糖：用已有结构体的字段 ——
    let user3 = User {
        name: String::from("王五"),
        ..user2 // 其余字段从 user2 复制（注意：name 是 String，会 move）
    };
    // println!("{}", user2.name); // 编译错误：user2.name 已被 move
    println!("user3: {}, {} 岁", user3.name, user3.age);

    // —— 打印结构体（需要 #[derive(Debug)]，见 app4 介绍 derive） ——
    // println!("{:?}", user1); // 编译错误：User 没有实现 Debug
}
