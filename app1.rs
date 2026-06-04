// === Rust 整数类型 ===
//
// 有符号: i8 i16 i32 i64 i128 isize
// 无符号: u8 u16 u32 u64 u128 usize
// 默认整数类型 i32。
// isize/usize 大小取决于平台（64 位机器 = 64 位）。
//
// 溢出行为：开发时宁可炸得响，发布时宁可跑得快
//   debug 模式 → 帮你抓 bug，溢出直接 panic 崩溃，让你第一时间发现
//   release 模式 → 追求性能，不做检查，溢出自动回绕
// 显式控制用 wrapping_* / saturating_* / checked_* 方法。

fn main() {
    // 类型推断（默认 i32）
    let a = 42;

    // 显式标注
    let b: u64 = 100;

    // 字面量后缀
    let c = 255u8;     // 编译器知道这是 u8，不是默认的 i32
    let d = -128i8;    // 同理，明确指定 i8

    // 可读性分隔符 _
    let million = 1_000_000u32;

    // 进制字面量
    let hex = 0xffu8;        // 十六进制 255
    let oct = 0o77u8;        // 八进制 63
    let bin = 0b1111_0000u8; // 二进制 240
    let byte = b'A';         // u8 字节字面量 65

    // 溢出处理
    let max_u8 = 255u8;
    let wrapped = max_u8.wrapping_add(1); // 0

    println!("a = {a}, b = {b}, c = {c}, d = {d}");
    println!("million = {million}");
    println!("hex = {hex}, oct = {oct}, bin = {bin}, byte = {byte}");
    println!("255u8.wrapping_add(1) = {wrapped}");
}
