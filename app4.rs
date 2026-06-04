// === 何时 panic，何时返回 Result ===
//
// 经验法则：
//   panic → 调用方无法合理处理的、属于"bug"的情况
//   Result → 调用方可能想处理、属于"正常流程"的情况
//
// 典型场景对比：

fn main() {
    // ✅ 用 panic：库的内部状态不一致（不该发生）
    // 比如：你写了个 Cache 结构体，invariant 要求 size == entries.len()
    // 如果这个条件被打破，那是个 bug，应该 panic

    // ✅ 用 Result：外部输入不可控（文件、网络、用户输入）
    // 比如读配置：文件可能不存在，调用方应该有机会处理

    // ✅ 用 panic：测试代码和原型
    // 测试里 unwrap 是常见模式——测试输入是固定的，出错就该崩

    // ✅ 用 Result：库的公开 API
    // 不要替调用方做决定，把错误返回出去

    println!("总结：");
    println!("  可恢复 → Result + ? 传播");
    println!("  不可恢复（bug） → panic!");
    println!("  拿不准 → 先用 Result，调用方可以自己 unwrap");
}
