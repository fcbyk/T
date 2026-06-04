// === 引用与函数：借用、返回、悬垂引用 ===
//
// 引用可以在函数之间传递。但返回引用时，编译器要确保引用不会比被引用的值活得久。

fn main() {
    let s = String::from("hello world");

    // —— 借用传参：函数拿着引用读数据 ——
    let word = first_word(&s);
    println!("第一个词: {word}");

    // —— 借用传参：函数拿着引用修改数据 ——
    let mut name = String::from("rust");
    append_exclamation(&mut name);
    println!("修改后: {name}");

    // —— 不能返回局部变量的引用 ——
    // let r = dangle(); // 编译错误：返回的引用指向了已被释放的内存
}

// 借入不可变引用，返回一个切片引用
fn first_word(s: &String) -> &str {
    let bytes = s.as_bytes();
    for (i, &c) in bytes.iter().enumerate() {
        if c == b' ' {
            return &s[..i];
        }
    }
    &s[..]
}

// 借入可变引用，修改原数据
fn append_exclamation(s: &mut String) {
    s.push('!');
}

// ❌ 悬垂引用：函数内部的局部变量离开了作用域，返回的引用指向已释放的内存
// fn dangle() -> &String {
//     let s = String::from("hello");
//     &s  // s 在函数结束时被 drop，&s 变成悬垂指针。编译期拦截。
// }
