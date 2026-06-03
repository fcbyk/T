# demo109 变量与常量

## 一、单文件脚本执行

Rust 支持将单个 `.rs` 文件当作脚本直接执行，无需创建完整的 Cargo 项目。

### 方式一：`cargo -Zscript`（官方内置，需要 nightly）

```bash
cargo +nightly -Zscript hello.rs
```

- `+nightly` — 指定使用 nightly 工具链

最简单的脚本写法，无需任何额外声明：

```rust
fn main() {
    println!("Hello!");
}
```

如果需要依赖，在文件顶部用 `---` 嵌入 Cargo.toml：

```rust
---
[dependencies]
serde = "1"
---

fn main() {
    println!("with deps!");
}
```

### 方式二：`rust-script`（第三方，更成熟稳定）

```bash
cargo install rust-script
rust-script hello.rs
```

依赖写在顶部注释块里：

```rust
//! ```cargo
//! [dependencies]
//! reqwest = { version = "0.11", features = ["blocking"] }
//! ```

fn main() {
    println!("Hello!");
}
```

### 对比

| | `cargo script` | `rust-script` |
|---|---|---|
| 安装 | 内置 | `cargo install rust-script` |
| 工具链 | 需要 nightly | stable 即可 |
| 成熟度 | 较新 | 更稳定 |

---

## 二、Nightly 工具链

Rust 有两个发布频道：

- **stable** — 正式版，每 6 周发布一次，生产环境使用
- **nightly** — 每天构建的开发版，包含实验性功能，用 `-Z` 开头的 flag 开启

`cargo -Zscript` 还在实验阶段，尚未进入 stable，所以需要 nightly。

```bash
rustup install nightly       # 安装 nightly
rustup default nightly       # 切换默认为 nightly
cargo +nightly -Zscript hello.rs  # 临时使用 nightly，不切换默认
```

---

## 三、变量与常量

### `let` — 声明变量（默认不可变）

```rust
let x = 5;
println!("{x}");

let x = 6; // ❌ 编译错误，不可变
```

Rust 是**静态类型**语言，类型在编译期确定。`let` 支持类型推断，可以不写类型，但类型一旦确定就固定了。

### `mut` — 可变变量

```rust
let mut x = 5;
x = 6; // ✅ 可以修改值，但类型必须保持一致
```

类似 C 的普通变量，类型固定，值可以改。

### `const` — 常量

```rust
const MAX_SPEED: u32 = 100;
```

- 必须标注类型
- 只能赋编译期就能确定的值（不能是函数返回值）
- 可以定义在全局作用域
- 习惯全大写命名
- 编译器会将其内联到使用处，不占运行时内存（类似 C 的 `#define`，但有类型检查）

### `static` — 全局变量

```rust
static NAME: &str = "Rust";
```

程序运行期间一直存在，程序退出时才释放。

### 变量遮蔽（Shadowing）

用同名的 `let` 重新声明，新变量遮蔽旧变量：

```rust
let x = 5;
let x = x + 1;  // 遮蔽，x 现在是 6

let s = "hello";    // &str 类型
let s = s.len();    // 遮蔽为 usize 类型，合法
```

遮蔽 vs `mut` 的关键区别：

| | `mut` | 遮蔽 |
|---|---|---|
| 能否改值 | ✅ | ✅（创建新变量） |
| 能否改类型 | ❌ | ✅ |
| 本质 | 修改同一变量 | 创建新变量 |

遮蔽本质是创建了一个全新的变量，只是名字相同。从编译器视角看：

```rust
let x = 5;        // x_1: i32
let x = "hello";  // x_2: &str，x_1 依然存在只是无法访问
```

现象上像动态类型，本质仍是静态类型，类型安全从未被破坏。

---

## 四、内存管理与所有权

### 作用域自动释放

Rust 不需要手动 `free()`，也没有 GC，而是通过**所有权（Ownership）**机制，在编译期确定每个变量的生命周期，在作用域结束时自动释放：

```rust
{
    let x = 5;   // 分配
} // x 在这里自动释放
```

遮蔽时，旧变量不可访问，但实际释放时机是**当前作用域结束**：

```rust
{
    let x = 5;        // x_1
    let x = "hello";  // x_2，x_1 此时不可访问，但还没释放
} // x_1 和 x_2 在这里一起释放
```

### 全局作用域

全局作用域的 `static` 变量程序结束时才释放。`let` 不能写在全局作用域。

### 与其他语言对比

| | 释放方式 | 开销 |
|---|---|---|
| C | 手动 `free()` | 无运行时开销，但容易出错 |
| Java/JS | GC 自动扫描 | 有运行时开销 |
| Rust | 编译期确定释放时机 | 零运行时开销 |

---

## 五、Rust 编译器的设计哲学

Rust 的核心理念是**把问题消灭在编译期**，编译器非常严格，会在编译阶段帮你检查：

- 内存释放时机（所有权）
- 变量未初始化就使用
- 可变/不可变冲突
- 类型不匹配
- 空指针（Rust 直接没有空指针）
- 数据竞争（多线程）

### 典型现象

逻辑看起来没问题，但编译报错：

```rust
let s = String::from("hello");
let s2 = s;
println!("{s}"); // ❌ 编译错误：s 的所有权已移交给 s2
```

这不是逻辑错了，而是写法违反了编译器的内存安全规则。

学 Rust 很大程度上是在**学编译器的思维方式**。一旦编译通过，绝大部分运行时崩溃就不会发生了——这也是 Rust 的口号：**"如果能编译，基本就能跑"**。