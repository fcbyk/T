// === Rust 数组 ===
//
// 固定长度的同构集合，类型签名 [T; N]。
// 栈上分配，长度编译时确定。
// 越界访问：运行时 panic（不是 C 的 UB）。

fn main() {
    // [i32; 5] = 5 个 i32
    let arr: [i32; 5] = [1, 2, 3, 4, 5];

    // 初始化为相同值: [0; 3] = 3 个 0
    let zeros = [0; 3];

    // 索引访问
    let first = arr[0];
    let last = arr[arr.len() - 1];

    // 长度
    let len = arr.len();

    println!("arr = {arr:?}");
    println!("zeros = {zeros:?}");
    println!("arr[0] = {first}, arr[4] = {last}, len = {len}");

    // 越界会 panic（运行时错误，不是 UB）：
    // println!("{}", arr[100]); // index out of bounds
}
