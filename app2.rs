// === 元组结构体 与 单元结构体 ===
//
// 普通结构体每个字段都有名字。
// 还有一种"元组结构体"——字段没名字，靠位置区分。
// 适合给某个类型起个有意义的包装名。

// 元组结构体：字段无名，按位置访问
struct Color(u8, u8, u8);          // RGB
struct Point(f64, f64);           // x, y

// 单元结构体：没有字段，类似一个"标签"标记
#[allow(dead_code)]
struct LoggedIn;    // 可以标记"已登录状态"
#[allow(dead_code)]
struct Guest;       // 可以标记"游客状态"

fn main() {
    // —— 元组结构体 ——
    let red = Color(255, 0, 0);
    let p = Point(3.0, 4.0);

    // 按索引访问字段
    println!("red = ({}, {}, {})", red.0, red.1, red.2);
    println!("point = ({}, {})", p.0, p.1);

    // 元组结构体可以解构
    let Color(r, g, b) = red;
    println!("解构: r={r}, g={g}, b={b}");

    // —— 单元结构体 ——
    // 不存数据，只表示一种"状态"或"标签"
    let state: LoggedIn = LoggedIn;
    // 单元结构体的大小是 0 字节（零大小类型 ZST）
    println!("LoggedIn 占用: {} 字节", std::mem::size_of_val(&state));
    // 常用在：泛型标记、PhantomData、enum 的变体中等场景
}
