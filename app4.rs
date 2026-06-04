// === impl 块：给结构体/枚举加方法 ===
//
// Rust 的 struct 只有数据，行为单独写在 impl 块里。
// 方法第一个参数是 &self / &mut self / self，表示调用方式。

#[derive(Debug)] // 自动生成 Debug trait，让 {:?} 可以打印
struct Rectangle {
    width: f64,
    height: f64,
}

impl Rectangle {
    // 方法：&self 借用实例（只读）
    fn area(&self) -> f64 {
        self.width * self.height
    }

    // 方法：&mut self 可变借用（可以修改字段）
    fn scale(&mut self, factor: f64) {
        self.width *= factor;
        self.height *= factor;
    }

    // 关联函数（没有 self 参数，相当于"静态方法"）
    // 用 Rectangle::square() 调用
    fn square(size: f64) -> Rectangle {
        Rectangle {
            width: size,
            height: size,
        }
    }
}

fn main() {
    let mut rect = Rectangle {
        width: 3.0,
        height: 4.0,
    };

    println!("rect = {rect:?}");

    // —— 调用方法 ——
    println!("面积 = {}", rect.area());

    // —— 可变方法 ——
    rect.scale(2.0);
    println!("放大 2x 后: {rect:?}，面积 = {}", rect.area());

    // —— 关联函数 ——
    let sq = Rectangle::square(5.0);
    println!("正方形: {sq:?}，面积 = {}", sq.area());
}
