// === Result / Option 常用方法 ===
//
// match 是最通用的，但标准库提供了很多快捷方法，能省不少代码。

fn main() {
    // —— unwrap_or / unwrap_or_else：给默认值 ——
    let num = Some(42).unwrap_or(0);
    println!("unwrap_or: {num}");      // 42

    let num2: Option<i32> = None;
    println!("unwrap_or_else: {}", num2.unwrap_or_else(|| {
        // 默认值可以惰性计算
        let x = 1 + 1;
        x * 10
    })); // 20

    // —— and_then：链式处理（flat_map） ——
    let result = Some(4)
        .and_then(|n| if n > 3 { Some(n * 2) } else { None })
        .and_then(|n| if n < 10 { Some(n + 1) } else { None });
    println!("and_then: {result:?}");  // Some(9)

    let broken = Some(2)
        .and_then(|n| if n > 3 { Some(n) } else { None }); // 第一个就 None 了
    println!("broken: {broken:?}");    // None

    // —— map / map_err：转换成功值或错误值 ——
    let ok: Result<i32, &str> = Ok(10);
    let doubled = ok.map(|v| v * 2);   // Ok 时改值，Err 时不变
    println!("map: {doubled:?}");      // Ok(20)

    let err: Result<i32, &str> = Err("失败");
    let msg = err.map_err(|e| format!("包装: {e}"));
    println!("map_err: {msg:?}");      // Err("包装: 失败")

    // —— ok / err：Result ↔ Option 互转 ——
    let r: Result<i32, &str> = Ok(42);
    println!("Result→Option: {:?}", r.ok()); // Some(42)

    let r2: Result<i32, &str> = Err("错");
    println!("Err→Option: {:?}", r2.err()); // Some("错")
}
