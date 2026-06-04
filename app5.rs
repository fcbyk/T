// === Rust 元组 ===
//
// 固定长度的异构集合，类型签名 (T1, T2, ...)。
// 解构：let (a, b) = tup;
// 索引：tup.0, tup.1, ...
// 单元元组 () 表示"空"（类似 void）。

fn main() {
    // 多种类型混合
    let tup: (i32, f64, char, bool) = (42, 3.14, 'R', true);

    // 解构
    let (a, b, c, d) = tup;

    // 索引访问
    let first = tup.0;
    let third = tup.2;

    // 单元类型 () — 零大小，类似 void
    let unit: () = ();

    println!("解构: a={a}, b={b}, c={c}, d={d}");
    println!("索引: tup.0={first}, tup.2={third}");
    println!("单元元组: {:?}", unit);
}
