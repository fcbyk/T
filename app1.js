/**
 * 为了和其他语言继承形态一致，JS提供了class 关键词用于模拟传统的class 
 * 但底层实现机制依然是原型继承
 * class 只是语法糖为了让类的声明与继承更加简洁清晰
 */

// 类的两种创建方式
class User {}
let Article = class {};

// 函数
function Usera(){ }

console.log(new Article());
console.log(new User());
console.log(new Usera());

// 类其实是函数
console.log(typeof User); //function
console.log(typeof Usera); //function
