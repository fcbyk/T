/**
 * 枚举反向映射
 * 在 TypeScript 中，数值枚举会自动生成反向映射（从值到名称的映射）。
 * 这使得你可以通过枚举的值反向查找其名称。
 */
enum DirectionC {
  Up = 1,
  Down,
  Left,
  Right,
}

console.log(DirectionC[1]); // 输出: "Up"
console.log(DirectionC[2]); // 输出: "Down"