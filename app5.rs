// === impl Trait 与 dyn Trait ===
//
// impl Trait：返回"实现了某 trait 的某类型"，编译时确定具体类型
// dyn Trait：运行时多态，不同类型可以放进同一个容器

// —— impl Trait 作为参数（语法糖） ——
fn greet(item: &impl Summary) {
    println!("摘要: {}", item.summarize());
}

// 等价于：
// fn greet<T: Summary>(item: &T) { ... }

// —— impl Trait 作为返回值 ——
fn make_summary(text: &str) -> impl Summary {
    String::from(text) // String 实现了 Summary
}

// —— dyn Trait：不同类型放进同一个 Vec ——
fn demo_dyn() {
    let a = Article { title: String::from("A"), content: String::from("...") };
    let t = Tweet { author: String::from("X"), text: String::from("hi") };

    // Vec<Box<dyn Summary>> = "装着所有实现了 Summary 的类型的箱子"
    let items: Vec<Box<dyn Summary>> = vec![Box::new(a), Box::new(t)];

    for item in &items {
        println!("{}", item.summarize());
    }
}

// 复用 trait 定义
trait Summary {
    fn summarize(&self) -> String;
}

impl Summary for String {
    fn summarize(&self) -> String {
        self.clone()
    }
}

#[allow(dead_code)]
struct Article {
    title: String,
    content: String,
}
impl Summary for Article {
    fn summarize(&self) -> String {
        format!("文章: {}", self.title)
    }
}

#[allow(dead_code)]
struct Tweet {
    author: String,
    text: String,
}
impl Summary for Tweet {
    fn summarize(&self) -> String {
        format!("推: {}", self.text)
    }
}

fn main() {
    greet(&String::from("hello"));
    let s = make_summary("生成的摘要");
    println!("make_summary: {}", s.summarize());

    demo_dyn();
}
