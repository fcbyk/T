// === 函数是一等公民：当参数、当返回值 ===
//
// 函数和闭包可以像普通值一样传来传去。

// 函数当参数
fn apply(f: fn(i32) -> i32, x: i32) -> i32 {
    f(x)
}

// 函数当返回值（返回闭包）
fn make_adder(amount: i32) -> impl Fn(i32) -> i32 {
    move |n| n + amount // move 把 amount 的所有权移进闭包
}

fn main() {
    // —— 函数指针（fn 类型） ——
    fn square(n: i32) -> i32 {
        n * n
    }
    let f: fn(i32) -> i32 = square;
    println!("函数指针: f(5) = {}", f(5));

    // —— 函数当参数 ——
    println!("apply(square, 5) = {}", apply(square, 5));
    println!("apply(|n| n * 3, 5) = {}", apply(|n| n * 3, 5));

    // —— 函数当返回值 ——
    let add_10 = make_adder(10);
    println!("make_adder(10)(5) = {}", add_10(5));
}
