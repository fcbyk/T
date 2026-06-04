// === Rust 字符类型 ===
//
// char: 4 字节，可表示任意 Unicode 标量值。
// 不同于 C 的 char（1 字节），Rust char 支持中文、emoji 等。

fn main() {
    let c1 = 'a';
    let c2: char = '中';
    let c3 = '🦀';

    // Unicode 码点（char → u32）
    let codepoint = c2 as u32;

    // u8 → char 需用 from，as 不能直接转
    let from_u8 = char::from(b'A');

    // 实用方法
    let is_ascii = c1.is_ascii();
    let is_digit = '6'.is_digit(10);  // 问："字符 '6' 在十进制里算数字吗？" → true

    println!("c1 = {c1}, c2 = {c2}, c3 = {c3}");
    println!("'中' 码点 = U+{codepoint:04X}");
    println!("char::from(b'A') = {from_u8}");
    println!("'a'.is_ascii() = {is_ascii}, '6'.is_digit(10) = {is_digit}");
}
