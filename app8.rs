// === Rust 字符串：&str 与 String ===
//
// &str    → 字符串切片，不可变借用，通常指向字面量或 String 的一部分
// String  → 堆分配、可增长的 UTF-8 字符串
//
// 核心区别：String 拥有数据，&str 只是借用。
// String → &str 用 & 或 as_str()，零开销。
//
// 注意：.len() 返回字节数，不是字符数。
// 中文字符每字 3 字节（UTF-8），用 .chars().count() 获取字符数。

fn main() {
    // —— &str ——
    let s1: &str = "hello";       // 字面量，编译时已知
    let s2 = "你好世界";             // 类型推断 &str

    // —— String ——
    let mut s3 = String::from("hello");
    s3.push_str(", world");       // 追加 &str
    s3.push('!');                 // 追加 char

    let s4 = "hello".to_string(); // to_string() 创建 String

    // String → &str
    let s3_slice: &str = &s3;

    // 拼接（+ 消费左边的 String）
    let s5 = s4 + " " + "rust";   // s4 不再可用

    // 格式化宏（不消费所有权）
    let s6 = format!("{s1}, {s2}");

    // 字节数 vs 字符数
    let byte_len = s2.len();              // 12（每个中文字符 3 字节）
    let char_count = s2.chars().count();  // 4

    println!("s1 = {s1}");
    println!("s3 = {s3}, s3_slice = {s3_slice}");
    println!("s5 = {s5}");
    println!("s6 = {s6}");
    println!("\"你好世界\" 字节数={byte_len}, 字符数={char_count}");
}
