// === Vec<T>：动态数组 ===
//
// 堆上分配的动态数组，长度可变。相当于 Python list / JS Array。

fn main() {
    // —— 创建 ——
    let _v1: Vec<i32> = Vec::new();  // 空 Vec，类型标注不可省略
    let mut v2 = vec![1, 2, 3];     // vec! 宏：常用
    let v3 = vec![0; 5];               // [0, 0, 0, 0, 0]

    println!("v2 = {v2:?}, v3 = {v3:?}");

    // —— 增删 ——
    v2.push(4);                         // 末尾追加
    v2.push(5);
    let last = v2.pop();                // 弹出末尾，返回 Option<T>
    println!("push 后: {v2:?}, pop = {last:?}");

    // —— 索引访问 ——
    println!("v2[0] = {}", v2[0]);      // 越界时 panic
    println!("v2.get(10) = {:?}", v2.get(10)); // 安全访问，返回 Option，越界 = None

    // —— 遍历 ——
    // 不可变遍历（最常用）
    for x in &v2 {
        print!("{x} ");
    }
    println!();

    // 可变遍历
    for x in &mut v2 {
        *x *= 10; // *x 解引用后修改原值
    }
    println!("v2 ×10: {v2:?}");

    // 消耗遍历：拿走所有权，v2 之后不能再用
    let sum: i32 = v2.into_iter().sum();
    println!("sum = {sum}");
    // println!("{v2:?}"); // 编译错误：v2 已被 move
}
