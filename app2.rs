// === 不可变引用（&T） ===
//
// 引用让你"借"一个值来用，不拿走所有权。
// &T 是只读借用，可以同时存在多个。
// 借用方用完（离开作用域），所有权还在原处。

fn main() {
    // —— let 和 mut 是两个独立的概念 ——
    //
    // let   = 声明变量（创造一个新名字）
    // mut   = 允许改这个绑定的值 或 允许可变借用
    //
    // 默认不加 mut：变量绑定后不能重新赋值，也不能创建 &mut 引用
    // 加了 mut：可以改值，可以创建 &mut 引用

    let a = 1;          // 声明不可变变量 a
    // a = 2;           // 编译错误：默认不可变，不能重新赋值

    let mut b = 1;      // 声明可变变量 b
    println!("b 初始值 = {b}");
    b = 2;              // OK，mut 允许修改
    println!("b 修改后 = {b}");

    let mut s = String::from("hello"); // 声明可变 String
    s.push_str(", world");             // mut 允许修改
    println!("s = {s}");

    // —— 创建引用 ——
    let r1 = &s;  // 借用 s
    let r2 = &s;  // 可以借多次（只读）

    println!("r1 = {r1}, r2 = {r2}");

    // —— 引用传参（不转移所有权） ——
    let len = calc_len(&s);
    println!("\"{s}\" 长度 = {len}"); // s 还能用！

    // —— 解引用 * ——
    //
    // * 从引用"拿出"指向的实际值。和 C 的 *pointer 概念一样。
    //
    // 为什么 println!("{rx}") 也能输出 42？
    //   因为 println! 内部对引用做了"自动解引用"，方便显示。
    //   但类型完全不同：rx 是 &i32，*rx 是 i32。
    //
    // 什么时候必须用 * ？
    //   赋值给变量、参与运算、类型断言... 所有"需要那个真实值"的场景。

    let x = 42;
    let rx = &x;

    // println 自动解引用，所以看起来一样
    println!("rx  = {rx}");  // &i32，自动解引用显示
    println!("*rx = {}", *rx); // i32，手动解引用

    // 但类型不同：
    //   rx 的类型是 &i32（一个指针/引用）
    //   *rx 的类型是 i32（真正的整数值）
    let copy_of_x: i32 = *rx; // 必须 *rx，不能写成 let copy: i32 = rx;
    println!("copy_of_x = {copy_of_x}");
    assert_eq!(*rx, 42);

    // —— 引用默认不可变 ——
    // let r = &mut s; // 如果没声明 mut，不能创建可变引用
}

fn calc_len(s: &String) -> usize {
    s.len()
}
