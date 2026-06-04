// === panic! vs Result ===
//
// Rust 没有异常。错误处理两条路：
//   panic!  → 程序直接崩，用于不可恢复的 bug
//   Result  → 返回错误给调用方处理，用于可恢复的错误

fn main() {
    // —— panic!：程序崩溃 ——
    // 触发条件：显式调用、越界访问、unwrap 遇到 None/Err 等
    // let v = vec![1, 2, 3];
    // let x = v[99]; // panic: index out of bounds

    // —— Result 基本形态 ——
    let ok_val: Result<i32, &str> = Ok(42);
    let _err_val: Result<i32, &str> = Err("出错了");

    // match 处理（最"原生"的方式）
    match ok_val {
        Ok(v) => println!("成功: {v}"),
        Err(e) => println!("失败: {e}"),
    }

    // —— unwrap / expect：快速取值 ——
    // 如果遇到 Err 就直接 panic，适用于"理论上不可能错"的场景
    let val = ok_val.unwrap(); // Ok 时取出值，Err 时 panic
    println!("unwrap: {val}");

    // expect 和 unwrap 一样，但 panic 时带自定义消息
    let val2 = ok_val.expect("这里不应该失败");
    println!("expect: {val2}");

    // 以下会 panic（取消注释试一下）：
    // let val3 = err_val.unwrap();
    // let val4 = err_val.expect("手动爆炸");
}
