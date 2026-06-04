// === Trait：定义共享行为 ===
//
// trait = 接口（interface），定义"能做什么"。
// 任何类型都可以实现 trait，不依赖继承。

// 定义 trait
trait Summary {
    fn summarize(&self) -> String;

    // 默认实现（实现方可以不写，用默认的）
    fn default_summary(&self) -> String {
        String::from("（暂无简介）")
    }
}

// 为自定义类型实现 trait
#[derive(Debug)]
struct Article {
    title: String,
    content: String,
}

impl Summary for Article {
    fn summarize(&self) -> String {
        format!("「{}」— {}", self.title, &self.content[..40.min(self.content.len())])
    }
}

struct Tweet {
    author: String,
    text: String,
}

impl Summary for Tweet {
    fn summarize(&self) -> String {
        format!("@{}: {}", self.author, self.text)
    }
    // default_summary 没写，自动用默认实现
}

fn main() {
    let article = Article {
        title: String::from("Rust 学习笔记"),
        content: String::from("今天学了 trait 和泛型，感觉和 Go 的 interface 很像..."),
    };

    let tweet = Tweet {
        author: String::from("bytk"),
        text: String::from("Rust 真香"),
    };

    println!("文章: {}", article.summarize());
    println!("推文: {}", tweet.summarize());
    println!("默认: {}", tweet.default_summary());
}
