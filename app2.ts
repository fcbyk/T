/**
 * 指定枚举成员的值
 * 你可以显式指定枚举成员的值。指定了值后，后续没有显式赋值的成员会继续递增。
 */
enum DirectionA {
  Up = 1,
  Down, // 自动赋值为 2
  Left, // 自动赋值为 3
  Right, // 自动赋值为 4
}

console.log(DirectionA.Up); // 输出: 1
console.log(DirectionA.Down); // 输出: 2
console.log(DirectionA.Left); // 输出: 3
console.log(DirectionA.Right); // 输出: 4