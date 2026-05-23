/**
 * 数组和元组的类型注解
 * 对于数组，可以使用 [] 来指定数组中元素的类型。
 * 元组（Tuple）是一种可以包含不同类型元素的数组类型。元组的类型注解可以显式指定每个元素的类型。
 * [string, number] 表示 person 是一个元组，第一个元素是字符串类型，第二个元素是数字类型。
 */
let nums: number[] = [1, 2, 3, 4];
let strs: Array<string> = ["apple", "banana", "cherry"];
let personA: [string, number] = ["Alice", 30];