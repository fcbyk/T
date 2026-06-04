// === Rust 格式化输出：println! ===
//
// println! 是一个宏（macro），不是函数。宏在编译期展开。
// 比 C 的 printf 更安全——类型在编译期就检查了。
//
// 三个核心占位符：
//   {}   Display 输出（给人看的，要求类型实现 Display trait）
//   {:?} Debug 输出（给开发者看的，要求类型实现 Debug trait）
//   {:#?} 带缩进的 Debug 输出（多层嵌套时更可读）

#[allow(dead_code)]
#[derive(Debug)] // 给 Point 加上 Debug
struct Point { x: i32, y: i32 }

fn main() {
    // —— 基本：{} 必须对应 Display，{:?} 必须对应 Debug ——
    let name = "Rust";
    let version = 1.83;
    println!("你好，{}！版本：{}", name, version);

    // i32 同时实现了 Display 和 Debug，两种都能用。但输出不同：
    //   {}   → 42
    //   {:?} → 42（简单类型看不出区别）
    let num = 42;
    println!("Display: {}, Debug: {:?}", num, num);

    // 自定义类型：只有 #[derive(Debug)] 的才能用 {:?}
    // 一般类型不实现 Display，所以用 {:?} 是常态
    let p = Point { x: 1, y: 2 };
    println!("Point: {:?}", p);

    // {:#?} 带缩进美化
    println!("Point 美化: {:#?}", p);

    // —— 位置参数：{0} {1} 可以复用 ——
    println!("{0} {1} {0}", "重复", "替换"); // 输出: 重复 替换 重复

    // —— 命名参数 ——
    println!("{greeting}, {who}!", greeting = "你好", who = "世界");

    // —— 宽度与对齐 ——
    // {:>n} 右对齐
    // {:<n} 左对齐
    // {:^n} 居中
    println!("|{:>8}|", "右");
    println!("|{:<8}|", "左");
    println!("|{:^8}|", "居中");

    // —— 数字格式化 ——
    let n = 255;
    println!("十进制: {n}");        // 255
    println!("十六进制: {n:x}");     // ff
    println!(" 大 写: {n:X}");     // FF
    println!("二进制: {n:b}");      // 11111111
    println!("八进制: {n:o}");      // 377
    println!("加前缀: {n:#x}");     // 0xff

    // —— 精度的两种含义 ——
    // 浮点数：{:.N} = 保留 N 位小数
    // 字符串：{:.N} = 最多显示 N 个字符
    let pi = 3.1415926;
    println!("pi = {:.2}", pi);  // 3.14

    let text = "hello world";
    println!("{:.5}", text);     // "hello"（截断）

    // —— 补零与补空格 ——
    println!("补零: {:08}", 42);   // 00000042
    println!("千分位: {:08}", 1000); // 00001000

    // —— print! 不带换行，eprintln! 输出到 stderr ——
    print!("这行");
    print!("和这行连在一起\n");
    eprintln!("这是错误输出，会进 stderr");

    // —— format! 返回 String 而不是打印 ——
    let s = format!("拼接: {name} v{version:.1}");
    println!("{s}");
}
