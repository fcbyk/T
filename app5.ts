/**
 * 索引签名（Index Signature）
 * 接口可以通过索引签名来表示一个对象的动态属性。例如，如果你不知道对象可能有哪些属性，但你知道它们的类型，可以使用索引签名来描述。
 */
interface Dictionary {
  // [key: string]: number 表示 Dictionary 接口的任何属性名都是 string 类型，且它们的值是 number 类型。
  [key: string]: number;
}

let dictionary: Dictionary = {
  apple: 3,
  banana: 5,
  cherry: 7,
};