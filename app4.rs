---
[package]
edition = "2024"
---

/**
 * mut
 * 声明变量（可变）
 * 类似 C 的普通变量，类型固定，值可以改。
 */
fn main() {
    let mut x = 5;
    println!("x = {}", x);

    x = 6; // 可以修改值
    println!("x = {}", x);

    // x = "hello"; // 编译错误，类型不能改变

    mut_life();
}

/**
 * mut 变量的生命周期
 * 和 let 一样，只能写在 {} 块内，出了括号就释放
 * 可变性只在作用域内有效
 */
fn mut_life() {
    {
        let mut a = 1;
        a += 1; // 作用域内可以修改
        println!("a = {}", a); // 2
    } // a 在这里释放

    // println!("{a}"); // 编译错误，a 已释放

    {
        let mut b = 10;
        println!("b before = {}", b);
        {
            let mut b = 20; // 遮蔽，外层 b 暂时不可访问
            b += 5;
            println!("inner b = {}", b); // 25
        } // 内层 b 释放，外层 b 恢复可见
        println!("b after = {}", b); // 10
    } // 外层 b 释放
}

/**
 * mut vs 遮蔽
 * mut: 修改同一个变量的值，类型必须一致
 * 遮蔽: 创建新变量，可以改变类型
 */
fn mut_vs_shadowing() {
    // mut 方式
    let mut y = 5;
    y = 6; // 修改值

    // 遮蔽方式
    let z = 5;
    let z = "hello"; // 创建新变量，类型改变
}
