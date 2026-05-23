/**
 * 异构枚举（混合枚举）
 * TypeScript 允许创建异构枚举（也叫混合枚举），即枚举成员可以是数字和字符串的混合类型。
 * 虽然这种类型的枚举不常见，但它仍然是合法的。
 */
enum MixedEnum {
  No = 0,
  Yes = "YES",
}

console.log(MixedEnum.No); // 输出: 0
console.log(MixedEnum.Yes); // 输出: "YES"
