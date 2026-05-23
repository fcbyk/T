/**
 * 字符串枚举
 * TypeScript 还支持字符串枚举，其中枚举成员的值是字符串而不是数字。
 * 这对于表示具有具体意义的常量值（如状态码、事件类型等）时非常有用。
 */
enum DirectionB {
  Up = "UP",
  Down = "DOWN",
  Left = "LEFT",
  Right = "RIGHT",
}

console.log(DirectionB.Up); // 输出: "UP"
console.log(DirectionB.Left); // 输出: "LEFT"
