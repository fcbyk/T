// === 解构（Destructuring） ===
//
// match / if let / let 都能解构复合类型——一次拆出多个值。
// 可以嵌套解构，把复杂的嵌套结构一层层拆开。

#[derive(Debug)]
struct Point { x: i32, y: i32 }

fn main() {
    // —— 元组解构 ——
    let pair = (1, "hello");
    let (num, text) = pair; // let 也可以直接解构
    println!("{num}, {text}");

    // match 中解构元组
    let point = (3, 7);
    match point {
        (0, 0) => println!("原点"),
        (x, 0) => println!("在 X 轴上: {x}"),
        (0, y) => println!("在 Y 轴上: {y}"),
        (x, y) => println!("点: ({x}, {y})"),
    }

    // —— 结构体解构 ——
    let p = Point { x: 10, y: 20 };

    // 按字段名解构
    let Point { x, y } = p;
    println!("x={x}, y={y}");

    // 重命名解构（: 后面是新名字）
    let Point { x: x_axis, y: y_axis } = p;
    println!("重命名: x={x_axis}, y={y_axis}");

    // 部分解构：只关心部分字段，其余用 ..
    let Point { x, .. } = p;
    println!("只取 x: {x}");

    // —— 嵌套解构 ——
    enum Shape {
        Rect { top_left: Point, w: u32, h: u32 },
    }
    let rect = Shape::Rect {
        top_left: Point { x: 5, y: 5 },
        w: 100,
        h: 50,
    };

    match rect {
        // 一层层拆开：Shape → Rect → Point → x, y
        Shape::Rect {
            top_left: Point { x, y },
            w,
            h,
        } => println!("矩形: 起点({x},{y}), 宽{w}, 高{h}"),
    }
}
