/**
 * 枚举（Enums）
 * 枚举（Enum） 是 TypeScript 中的一种特殊类型，
 * 它允许我们为一组数值或字符串创建一个命名的集合。枚举通常用于表示一组固定的常量，使代码更加清晰、易于理解和维护。
 * TypeScript 中的枚举与其他语言中的枚举类似（例如 C#、Java 等），但是 TypeScript 的枚举功能比其他语言更加灵活，支持数值、字符串、异构（数值与字符串混合）枚举等多种方式。
 */

/**
 * 基本的数值枚举
 * 默认情况下，枚举的成员是数字类型，并且从 0 开始递增。如果不指定成员的值，TypeScript 会自动为每个成员分配一个递增的数字值。
 */
enum Direction {
  Up, // 默认为 0
  Down, // 默认为 1
  Left, // 默认为 2
  Right, // 默认为 3
}

let move: Direction = Direction.Up;
console.log(move); // 输出: 0