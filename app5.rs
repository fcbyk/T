// === Option 和 Result：标准库里的枚举 ===
//
// Rust 没有 null 也没有异常。
// 可空值用 Option<T>，可能出错的情况用 Result<T, E>。
// 两者都是标准库的枚举——不是什么特殊语法，只是用得特别多。

// Option<T> 的定义（标准库原文）：
//   enum Option<T> {
//       Some(T),   // 有值
//       None,      // 空
//   }

// Result<T, E> 的定义（标准库原文）：
//   enum Result<T, E> {
//       Ok(T),    // 成功，携带返回值
//       Err(E),   // 失败，携带错误信息
//   }

fn main() {
    // —— Option 的基本用法 ——
    let some_num = Some(42);
    let no_num: Option<i32> = None; // 需要标注类型，编译器不知道 None 里缺什么类型

    println!("some_num = {some_num:?}, no_num = {no_num:?}");

    // 用 match 取出值（模式匹配的详细语法见下一个 demo）
    match some_num {
        Some(v) => println!("有值: {v}"),
        None => println!("空的"),
    }

    // —— Result 的基本用法 ——
    let ok_result: Result<i32, &str> = Ok(100);
    let err_result: Result<i32, &str> = Err("出错了");

    println!("ok = {ok_result:?}, err = {err_result:?}");

    match ok_result {
        Ok(v) => println!("成功: {v}"),
        Err(e) => println!("失败: {e}"),
    }

    // —— 常用快捷方法（先混个眼熟，后面会详细讲） ——
    let num = some_num.unwrap(); // 如果是 None 就 panic，谨慎用
    println!("unwrap: {num}");

    let num2 = no_num.unwrap_or(0); // None 时给默认值
    println!("unwrap_or: {num2}");

    // ? 运算符：Result 的 Ok 取出值，Err 则提前返回（函数必须返回 Result）
    // 详见错误处理 demo
}
