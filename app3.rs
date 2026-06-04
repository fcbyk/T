// === if let / while let：只关心一种情况时的简写 ===
//
// match 是万能的，但有时你只关心一个分支，其他都用 _。
// if let 就是这种场景的语法糖。

fn main() {
    // —— if let 等价于 match { 一个分支 => ... , _ => () } ——
    let val = Some(42);

    // match 写法（啰嗦）
    match val {
        Some(v) => println!("有值: {v}"),
        _ => (), // 什么都不做还要写
    }

    // if let 写法（精简）
    if let Some(v) = val {
        println!("if let: {v}");
    }

    // if let + else 也可以
    let empty: Option<i32> = None;
    if let Some(v) = empty {
        println!("有值: {v}");
    } else {
        println!("空的");
    }

    // —— while let：只要匹配就继续循环 ——
    let mut stack = vec![1, 2, 3];

    while let Some(top) = stack.pop() {
        // 每次循环弹出栈顶，直到栈空
        print!("{top} "); // 3 2 1
    }
    println!();

    // —— if let 可以联合条件 ——
    let color = Some((255, 128, 0));
    if let Some((r, g, b)) = color {
        println!("RGB = ({r}, {g}, {b})");
    }
}
