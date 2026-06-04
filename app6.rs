// === Rust 属性（Attribute）语法：#[...] ===
//
// #[...] 是编译期指令，不参与运行，只对编译器说话。
// 写在"目标"的上面，影响紧跟着的那个东西（函数、结构体、模块...）。
// 内部属性用 #![...]，影响当前整个模块。

// —— 常用属性一览 ——

// 1. #[derive(...)]：自动生成 trait 实现
//    Debug → 可以用 {:?} 打印
//    Clone → 可以 .clone()
//    更多见后面 trait demo
#[allow(dead_code)]
#[derive(Debug)]
struct Point {
    x: i32,
    y: i32,
}

// 2. #[allow(...)]：关闭特定警告
#[allow(dead_code)]           // "未使用代码" 不报警
fn unused_fn() {               // 没被调用，但不会警告
    println!("没人调我");
}

// 3. #[test]：标记测试函数（cargo test 时自动运行）
#[test]
fn test_addition() {
    assert_eq!(2 + 2, 4);
}

// 4. #[cfg(...)]：条件编译
#[cfg(target_os = "macos")]    // 只在 macOS 上编译
fn mac_only() {
    println!("这段代码只在 macOS 上存在");
}

fn main() {
    let p = Point { x: 1, y: 2 };
    println!("{:?}", p);  // #[derive(Debug)] 让这行能编译

    #[allow(unused_variables)] // 也可以用在局部
    let unused = 42;

    // test 函数不会在 main 里自动跑，要用 cargo test
    // cfg 函数在 macOS 上可以调用：
    mac_only();
}
