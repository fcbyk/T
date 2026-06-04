// === 泛型（Generic）===
//
// <T> 是类型占位符，编译时被具体类型替换（单态化）。
// 一份代码同时适配 i32、f64、String 等多种类型。

// —— 泛型函数 ——
// T 可以是任意能比较的类型
fn largest<T: PartialOrd>(list: &[T]) -> &T {
    let mut largest = &list[0];
    for item in list {
        if item > largest {
            largest = item;
        }
    }
    largest
}

// 多个类型参数
fn pair<A, B>(a: A, b: B) -> (A, B) {
    (a, b)
}

// —— 泛型结构体 ——
#[allow(dead_code)]
#[derive(Debug)]
struct Point<T> {
    x: T,
    y: T,
}

// 泛型枚举（你天天用的其实就是泛型）
// Option<T>、Result<T, E> 就是标准库的泛型枚举

fn main() {
    // 泛型推导
    let nums = vec![3, 7, 1, 9, 2];
    println!("最大: {}", largest(&nums));

    let chars = vec!['a', 'z', 'm'];
    println!("最大: {}", largest(&chars));

    // 多个泛型
    let (a, b) = pair(42, "hello");
    println!("pair: ({a}, {b})");

    // 泛型结构体
    let int_point = Point { x: 1, y: 2 };
    let float_point = Point { x: 1.5, y: 3.0 };
    println!("int = {int_point:?}, float = {float_point:?}");
}
