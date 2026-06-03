---
[package]
edition = "2024"
---

/**
 * static
 * 声明全局变量
 * 程序运行期间一直存在，程序退出时才释放
 */
fn main() {
    println!("APP_NAME = {}", APP_NAME);

    let counter_val = unsafe { COUNTER };
    println!("COUNTER = {}", counter_val);

    increment_counter();

    let counter_val = unsafe { COUNTER };
    println!("COUNTER after increment = {}", counter_val);

    static_life();
}

/**
 * 全局 static 变量
 * 程序启动时创建，程序退出时释放
 * 生命周期贯穿整个程序运行期间
 */
static APP_NAME: &str = "Rust Demo";
static mut COUNTER: u32 = 0;

/**
 * 访问 static 变量需要 unsafe
 * 因为全局变量在多线程环境下可能产生数据竞争
 */
fn increment_counter() {
    unsafe {
        COUNTER += 1;
    }
}

/**
 * static 的生命周期
 * static 拥有 'static 生命周期，从程序启动到结束一直存在
 * 在函数间调用时保持状态，不会像 let 那样出作用域就释放
 */
fn static_life() {
    // 即使函数结束，COUNTER 的值也会保留
    increment_counter();
    increment_counter();

    let v = unsafe { COUNTER };
    println!("COUNTER in static_life = {}", v); // 2

    {
        // static 也可以定义在局部作用域
        // 但它的生命周期仍是整个程序，不是这个内层 {}
        static LOCAL_STATIC: i32 = 100;
        println!("LOCAL_STATIC = {}", LOCAL_STATIC);
    }
    // LOCAL_STATIC 依然存在，只是这里不可见（没有名字引用它）
}

/**
 * static vs const
 * const: 编译器内联，不占运行时内存
 * static: 真正分配内存，程序退出时释放
 */
fn static_vs_const() {
    // const 在编译时内联，每个使用处都是独立值
    const PI: f64 = 3.14159;

    // static 在程序全局只有一份
    static mut CACHE: u32 = 0;

    unsafe {
        CACHE = 100;
    }
}
