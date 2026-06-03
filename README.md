# demo108 Rust 打包单文件二进制

## 1. 编译 release 版本

```bash
cargo build --release
```

产物路径：
```
target/release/hello_world        # macOS / Linux
target/release/hello_world.exe    # Windows
```

**只需要这一个文件**，直接复制到同平台其他机器即可运行，无需安装任何运行时。

---

## 2. debug vs release

| | `cargo build` | `cargo build --release` |
|---|---|---|
| 产物路径 | `target/debug/` | `target/release/` |
| 编译速度 | 快 | 慢 |
| 运行性能 | 低，含调试信息 | 高，全优化 |
| 文件大小 | 大 | 小 |
| 用途 | 开发调试 | 分发部署 |

---

## 3. 进一步压缩体积（可选）

在 `Cargo.toml` 末尾添加：

```toml
[profile.release]
strip = true       # 去除符号表
opt-level = "z"    # 优先压缩体积（而非速度）
lto = true         # 链接时优化
```

重新编译后体积会明显减小（Hello World 在 macOS 上可压到 200KB 以下）。

---

## 4. target/release/ 目录说明

`cargo build --release` 会在 `target/release/` 生成大量文件，**只有同名二进制是最终产物**，其余都是编译过程的中间文件，与二进制运行无关：

```
target/release/
├── hello_world        # ✅ 最终产物，这个才是需要的
├── hello_world.d      # 依赖追踪，供 cargo 增量编译使用
├── build/             # 构建脚本产物
├── deps/              # 编译依赖的中间文件
├── incremental/       # 增量编译缓存
└── .fingerprint/      # 文件指纹，判断哪些需要重新编译
```

验证方式：将二进制单独复制到其他目录或机器直接运行，不依赖 `target/` 中的任何内容。

---

## 5. .gitignore

`target/` 目录体积很大且可随时重新生成，必须排除：

```
# .gitignore
/target
```

---

## 6. 平台与运行时

`cargo build --release` 不带 `--target` 时，默认编译给**当前机器**，产物只能在同平台运行。

Rust / C / C++ 编译出的是原生二进制，和 Python / JavaScript / Java 不同：

| 类型 | 代表语言 | 机制 |
|---|---|---|
| 原生二进制 | Rust、C、Go | 直接跑，无需运行时，但一个二进制只认一个平台 |
| 字节码 + 运行时 | Python、JS、Java | "到处跑"，但目标机器必须装对应运行时 |

---

## 7. 交叉编译

在 A 平台上编译出能在 B 平台运行的二进制，叫**交叉编译**。

```
你的机器（aarch64-apple-darwin）  →→→  目标机器（x86_64-unknown-linux-gnu）
```

### Target Triple 格式

```
架构 - 厂商 - 操作系统 - ABI
x86_64 - unknown - linux - gnu
```

`unknown` 是厂商位的占位符，Linux 可跑在任意硬件上，没有特定厂商，故填 `unknown`。

### 主流目标平台

| target triple | 平台 |
|---|---|
| `aarch64-apple-darwin` | macOS Apple Silicon |
| `x86_64-apple-darwin` | macOS Intel |
| `x86_64-unknown-linux-gnu` | Linux x86_64 |
| `aarch64-unknown-linux-gnu` | Linux ARM64 |
| `x86_64-pc-windows-msvc` | Windows x86_64 |
| `aarch64-pc-windows-msvc` | Windows ARM64 |

### Mac → Mac（原生支持）

```bash
rustup target add aarch64-apple-darwin
rustup target add x86_64-apple-darwin

cargo build --release --target aarch64-apple-darwin
cargo build --release --target x86_64-apple-darwin

# 合并成通用二进制（fat binary，两种架构都能跑，体积 = 两者相加）
lipo -create \
  target/aarch64-apple-darwin/release/hello_world \
  target/x86_64-apple-darwin/release/hello_world \
  -output hello_world-universal
```

### Mac → Linux / Windows（需要额外工具）

推荐用 [cross](https://github.com/cross-rs/cross)，基于 Docker 封装了所有依赖：

```bash
cargo install cross

cross build --release --target x86_64-unknown-linux-gnu
cross build --release --target x86_64-pc-windows-gnu
```

> Windows 二进制靠 **MinGW 工具链**（`-gnu` 后缀）交叉编译，不需要真正的 Windows 环境。  
> Docker 的 Windows 容器只能跑在 Windows 宿主机上，Mac 上无法使用。

---

## 8. 多平台发布：GitHub Actions

实际项目不需要准备多台设备，用 CI/CD 在云端并行编译即可。GitHub 免费提供 Linux、macOS、Windows 三种 runner。

### 触发方式

本地打 tag 并推送，自动触发 CI：

```bash
git tag v1.0.0
git push --tags
```

```
tag 推送到 GitHub
        ↓
build job：5 个平台并行编译
  ├── macos-latest    → aarch64-apple-darwin
  ├── macos-latest    → x86_64-apple-darwin
  ├── ubuntu-latest   → x86_64-unknown-linux-gnu
  ├── ubuntu-latest   → aarch64-unknown-linux-gnu（交叉编译）
  └── windows-latest  → x86_64-pc-windows-msvc
        ↓
release job：收集所有产物，创建 Draft Release
        ↓
开发者手动填 changelog，点 Publish 发布
```

### 权限配置

首次使用需开启仓库写权限：

**Settings → Actions → General → Workflow permissions → Read and write permissions**

### 产物打包格式

直接上传裸二进制到 GitHub Releases 会**丢失执行权限**，下载后需要手动 `chmod +x`。

解决方案：打包成压缩包再上传，`tar.gz` 会保留文件权限：

```bash
# Unix → tar.gz（保留执行权限）
tar -czf hello_world-aarch64-apple-darwin.tar.gz hello_world-aarch64-apple-darwin

# Windows → zip
7z a hello_world-x86_64-pc-windows-msvc.zip hello_world-x86_64-pc-windows-msvc.exe
```

用户下载解压后直接可执行，无需 `chmod`：

```bash
tar -xzf hello_world-aarch64-apple-darwin.tar.gz
./hello_world-aarch64-apple-darwin
```

完整 workflow 见 `.github/workflows/release.yml`。