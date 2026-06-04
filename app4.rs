// === Rust 控制流 ===
//
// if / loop / while / for，大部分是换皮。值得注意的区别：
//   1. 条件不需要括号，但必须是 bool（没有 truthy / falsy）
//   2. if 是表达式，可以赋值
//   3. for 迭代靠迭代器，没有 C 风格的三段式 for

fn main() {
    // —— if / else ——
    let n = 5;
    if n < 0 {
        println!("负数");
    } else if n == 0 {
        println!("零");
    } else {
        println!("正数");
    }

    // if 是表达式，可以直接赋值
    let label = if n % 2 == 0 { "偶数" } else { "奇数" };
    println!("label = {label}");

    // —— loop（无限循环，break 可以返回值）——
    let mut count = 0;
    let result = loop {
        count += 1;
        if count == 3 {
            break count * 10; // break 后面跟值 = loop 表达式的值
        }
    };
    println!("loop 返回值: {result}");

    // —— while ——
    let mut i = 3;
    while i > 0 {
        print!("{i} ");
        i -= 1;
    }
    println!();

    // —— for（迭代器驱动）——
    // 遍历范围
    for x in 0..5 {
        // 0,1,2,3,4（不含 5）
        print!("{x} ");
    }
    println!();

    // 遍历数组
    let arr = [10, 20, 30];
    for v in arr {
        // 直接拿值（消耗数组，后面 arr 不能再用）
        print!("{v} ");
    }
    println!();

    // 借用遍历（arr 还能用）
    let arr2 = [1, 2, 3];
    for v in &arr2 {
        print!("{v} ");
    }
    println!();
    println!("arr2 还能用: {arr2:?}");
}
