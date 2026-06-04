// === 迭代器（Iterator）===
//
// 迭代器是 Rust 集合的灵魂。
// 惰性求值：定义时不算，调用 collect/sum/count 等"消费方法"时才真正执行。
//
// 三种迭代方式：
//   v.iter()      — 不可变引用遍历   → &T
//   v.iter_mut()  — 可变引用遍历     → &mut T
//   v.into_iter() — 消耗遍历         → T（拿走所有权）

fn main() {
    let v = vec![1, 2, 3, 4, 5, 6];

    // —— 常用适配器（中间操作，惰性） ——
    // map：转换
    let doubled: Vec<_> = v.iter().map(|x| x * 2).collect();
    println!("×2: {doubled:?}");

    // filter：过滤
    let evens: Vec<_> = v.iter().filter(|&&x| x % 2 == 0).collect();
    println!("偶数: {evens:?}");

    // chain：连接两个迭代器
    let a = [1, 2];
    let b = [3, 4];
    let chained: Vec<_> = a.iter().chain(b.iter()).collect();
    println!("连接: {chained:?}");

    // take / skip：取前 N 个 / 跳过前 N 个
    let first3: Vec<_> = v.iter().take(3).collect();
    let skip2: Vec<_> = v.iter().skip(2).collect();
    println!("前3: {first3:?}, 跳2: {skip2:?}");

    // —— 消费方法（触发执行） ——
    let sum: i32 = v.iter().sum();
    let count = v.iter().count();
    let max = v.iter().max();
    let any = v.iter().any(|&x| x > 4);
    let all = v.iter().all(|&x| x > 0);
    println!("sum={sum}, count={count}, max={max:?}, any>4={any}, all>0={all}");

    // —— enumerate：带索引遍历 ——
    for (i, val) in v.iter().enumerate() {
        print!("[{i}]={val} ");
    }
    println!();
}
