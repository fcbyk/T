// === 切片：不拥有数据的引用 ===
//
// 切片 &[T] / &str 是"借用某段连续数据的一个视图"。
// 不拥有底层数据，只记录一个指针 + 长度。

fn main() {
    // —— 字符串切片 &str ——
    let s = String::from("hello world");

    let h = &s[0..5];   // "hello"
    let w = &s[6..11];  // "world"
    let all = &s[..];   // 全部

    println!("h = {h}, w = {w}, all = {all}");

    // 切片不拥有数据。如果原 String 被改了，切片引用可能失效。
    // 这由借用规则保证：有 &str 借用时，不能 &mut 原 String。

    // —— 数组切片 &[T] ——
    let arr = [10, 20, 30, 40, 50];
    let front = &arr[..3];  // [10, 20, 30]
    println!("front = {front:?}");

    // —— 切片作为参数 ——
    // &String 可以自动转成 &str，所以函数用 &str 做参数更通用。
    print_slice("字面量");           // 直接传 &str
    print_slice(&s);                // &String → 自动转 &str
    print_slice(&String::from("临时")); // 同上
}

// 参数用 &str 而不是 &String：两种都能接，更灵活。
fn print_slice(s: &str) {
    println!("print_slice: {s}");
}
