# demo117 Rust Trait 与泛型

### 泛型 — "写一份，到处用"

`<T>` 是类型占位符。你写函数时不写死 `i32` 还是 `f64`，写成 `T`，编译器在调用时帮你生成对应版本的代码。不是运行时切换，是编译期复制粘贴（单态化）。

### Trait — "定义能做什么"

等于接口。trait 是个行为契约：只要你实现了 `Summary` trait，你就必须有一个 `summarize()` 方法。任何类型都可以实现任意 trait，不依赖继承。

`#[derive(Debug)]` 就是自动实现 Debug trait。`clone()` 能调是因为有 Clone trait。`==` 能比是因为有 PartialEq trait。

### Trait Bound — "约束 T 必须能做什么"

`<T: Trait>` 的意思是：泛型 T 不是随便什么类型都行，必须实现了某个 trait。组合约束用 `<T: Display + Clone>`，多了嫌丑就用 `where` 子句分行写。

### 标准 Trait

Display / Debug（控制输出格式）、From / Into（类型转换）、Clone / Copy（复制语义）。这些是 Rust 代码里最常见的 trait，知道它们能帮你理解 90% 的库 API。

### impl Trait vs dyn Trait

`impl Trait` 是编译期多态（静态分发，零开销），适合返回"某种实现了 trait 的类型"。`dyn Trait` 是运行时多态，让不同类型放进同一个 `Vec` 里遍历——需要 `Box` 或引用包装。
