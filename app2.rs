// === Rust 浮点数类型 ===
//
// f32（单精度）/ f64（双精度）
// 默认浮点类型 f64。
//
// 特殊值：INFINITY / NEG_INFINITY / NAN
// NaN 不等于任何值，包括它自己。

fn main() {
    let x = 2.0;            // 默认 f64
    let y: f32 = 3.0;       // 显式 f32

    // 不同类型不能直接运算，需 as 转换
    let sum = x + y as f64;

    // 基本运算
    let diff = x - 1.0;
    let prod = x * 2.0;
    let quot = x / 3.0;     // 精确除法
    let rem = 10.0 % 3.0;   // 浮点也支持 %

    // 特殊值
    let inf = f64::INFINITY;    // 正无穷大
    let neg_inf = f64::NEG_INFINITY; // 负无穷大
    let nan = f64::NAN;              // 不是数字

    println!("x = {x}, y = {y}, sum = {sum}");
    println!("diff = {diff}, prod = {prod}, quot = {quot}, rem = {rem}");
    println!("inf = {inf}, neg_inf = {neg_inf}, nan = {nan}");
    println!("nan == nan ? {}", nan == nan); // false
}
