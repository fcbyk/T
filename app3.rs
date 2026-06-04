// === Rust 布尔类型 ===
//
// bool 只有两个值：true / false，占 1 字节。
// Rust 不做 truthy/falsy 自动转换，if 条件必须是 bool。

fn main() {
    let t = true;
    let f: bool = false;

    // 比较运算返回 bool
    let gt = 5 > 3;
    let eq = "abc" == "abc";

    // 逻辑运算
    let and = t && f;
    let or = t || f;
    let not = !t;

    println!("t = {t}, f = {f}");
    println!("5 > 3 = {gt}, 'abc' == 'abc' = {eq}");
    println!("t && f = {and}, t || f = {or}, !t = {not}");

    // 以下会编译错误（取消注释试试）：
    // if 1 { println!("不会走这里"); } // expected `bool`, got integer
}
