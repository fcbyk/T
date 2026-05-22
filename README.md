# demo19

## 条件判断
- `if`：基础条件判断，必须是 Bool 类型
- `guard`：提前返回，减少嵌套层级
- `guard let`：判断 + 可选值解包（推荐）
- `switch`：强大的分支结构，支持范围、元组、模式匹配
- switch 不需要 break，必须覆盖所有情况

## 循环结构
- `for-in`：遍历数组、区间（闭区间 `...` / 半开区间 `..<`）
- 使用 `_` 忽略循环变量
- `while`：先判断后执行
- `repeat-while`：至少执行一次

## 跳转语句
- `return`：常与 guard 配合实现提前返回
- `break`：结束当前循环或 switch
- `continue`：跳过本次迭代，进入下一次
- 标签语句（label）：控制多层循环的跳转
- `fallthrough`：switch 中强制贯穿到下一个 case

## 条件增强 where
- for-in 中使用 where 过滤条件
- if let 后使用逗号添加额外条件（替代 where）
- switch 中使用 where 进行模式匹配
- where 比嵌套 if 更简洁清晰

## 生命周期控制 defer
- defer 块在函数退出时执行（无论正常退出还是 return）
- 多个 defer 按后进先出（LIFO）顺序执行
- 常用于资源清理、关闭文件等场景
- 即使提前 return，defer 也会执行