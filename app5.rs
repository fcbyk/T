// === Rust 运算符 ===
//
// 和大多数语言差不多，注意几个 Rust 特有的：
//   1. 没有 ++ / --，用 += 1 代替
//   2. 没有 ===，== 本身就做值比较（不是引用比较）
//   3. 范围运算符 .. / ..=

fn main() {
    // —— 算术 ——
    let sum = 10 + 3;
    let diff = 10 - 3;
    let prod = 10 * 3;
    let quot = 10 / 3;    // 整数除法，截断 = 3
    let rem = 10 % 3;     // 取余 = 1
    // 没有 ++ / --，用 += 1 代替
    let mut x = 1;
    x += 1;
    println!("算术: {sum} {diff} {prod} {quot} {rem}, x={x}");

    // —— 比较（返回 bool）——
    let eq = 5 == 5;
    let ne = 5 != 3;
    let gt = 5 > 3;
    let lt = 5 < 3;
    // Rust 没有 ===，== 比较值是否相等（要求类型实现 PartialEq）
    println!("比较: eq={eq}, ne={ne}, gt={gt}, lt={lt}");

    // —— 逻辑 ——
    let and = true && false;
    let or = true || false;
    let not = !true;
    println!("逻辑: and={and}, or={or}, not={not}");

    // —— 位运算 ——
    let bit_and = 0b1100 & 0b1010;  // 1000 = 8
    let bit_or  = 0b1100 | 0b1010;  // 1110 = 14
    let bit_xor = 0b1100 ^ 0b1010;  // 0110 = 6
    let shift_l  = 1 << 3;           // 8
    let shift_r  = 8 >> 1;           // 4
    println!("位运算: &={bit_and}, |={bit_or}, ^={bit_xor}, <<={shift_l}, >>={shift_r}");

    // —— 范围运算符 ——
    // a..b  = [a, b)，不含 b
    // a..=b = [a, b]，含 b
    let r1 = 0..5;   // std::ops::Range
    let r2 = 0..=5;  // std::ops::RangeInclusive
    print!("0..5: ");
    for i in r1 { print!("{i} "); }
    println!();
    print!("0..=5: ");
    for i in r2 { print!("{i} "); }
    println!();
}
