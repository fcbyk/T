// === Rust 所有权基础 ===
//
// 核心规则（三条，编译器强制执行）：
//   1. 每个值有且只有一个所有者（owner）
//   2. 所有者离开作用域，值被自动释放（drop）
//   3. 赋值 / 传参 / 返回 会转移所有权（move），原变量失效

fn main() {
    // —— 栈上数据：自动 Copy ——
    // i32 等基本类型实现了 Copy trait，赋值时不会 move，而是自动复制。
    let a = 42;
    let b = a;     // a 的值复制给 b，a 仍然有效
    println!("a = {a}, b = {b}");

    // —— 堆上数据：move ——
    // String 在堆上分配，赋值 = 所有权转移，原变量失效。
    let s1 = String::from("hello");
    let s2 = s1;   // s1 的所有权移给 s2
    // println!("{s1}"); // 编译错误：s1 已经被 move

    // —— clone：显式深拷贝 ——
    // 如果你真的需要两个独立副本，用 clone()。
    let s3 = String::from("world");
    let s4 = s3.clone(); // 堆上复制一份，s3 仍然有效
    println!("s3 = {s3}, s4 = {s4}");

    // —— 函数传参 = move ——
    takes_ownership(s2); // s2 移入函数，之后 s2 失效

    // —— 函数返回值 = move 回来 ——
    let s5 = gives_ownership();       // 返回值所有权给 s5
    let s6 = takes_and_gives(s5);    // s5 移入，返回值移给 s6
    println!("s6 = {s6}");

    // —— 作用域与 drop ——
    {
        let temp = String::from("临时的");
        println!("作用域内: {temp}");
    } // temp 离开作用域，自动析构，堆内存释放
    // println!("{temp}"); // 编译错误：temp 已经被 drop
}

fn takes_ownership(s: String) {
    println!("拿走了: {s}");
} // s 离开作用域，被 drop。调用方的原变量因此失效

fn gives_ownership() -> String {
    String::from("给你的")
}

fn takes_and_gives(s: String) -> String {
    s // 最后一个表达式，所有权返回给调用方
}
