// === Vec 常用操作 ===
//
// 开发中经常用到的几个方法，集中展示。

fn main() {
    let mut v = vec![3, 1, 4, 1, 5, 9, 2, 6];

    // —— 切片 ——
    let slice = &v[2..5]; // [4, 1, 5]
    println!("切片: {slice:?}");

    // —— 排序 ——
    v.sort();
    println!("排序: {v:?}");

    v.sort_by(|a, b| b.cmp(a)); // 降序
    println!("降序: {v:?}");

    // —— 查找 ——
    if let Some(pos) = v.iter().position(|&x| x == 5) {
        println!("5 的位置: {pos}");
    }

    // —— 过滤删除 ——
    v.retain(|&x| x % 2 == 0); // 只保留偶数
    println!("只留偶数: {v:?}");

    // —— 拼接 ——
    let mut a = vec![1, 2, 3];
    let b = vec![4, 5];
    a.extend(b); // 把 b 的元素追加到 a
    println!("extend: {a:?}");

    // —— 是否为空 / 长度 ——
    println!("len = {}, is_empty = {}", a.len(), a.is_empty());

    // —— clear / truncate ——
    let mut tmp = vec![1, 2, 3, 4, 5];
    tmp.truncate(2); // 截断到前 2 个
    println!("截断: {tmp:?}");
}
