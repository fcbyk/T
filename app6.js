/**
 * 原型和实例的关系
 * 如果我们希望确定原型和实例之间的关系, 有两种方式
 * instanceof 操作符和isPrototypeOf()方法
 */
(async () => {

    let { default: { Animal, Dog , dog } } = await import("./app5.js");

    // instanceof 操作符
    // 只要用这个操作符来测试实例的原型链中出现过的构造函数，结果就会返回 true
    console.log(dog instanceof Object); // true
    console.log(dog instanceof Animal); // true
    console.log(dog instanceof Dog); // true

    // isPrototypeOf()方法
    // 只要是原型链中出现过的原型，都可以说是该原型链所派生的实例的原型
    // 因此 isPrototypeOf()方法也会返回 true
    console.log(Object.prototype.isPrototypeOf(dog)); // true
    console.log(Animal.prototype.isPrototypeOf(dog)); // true
    console.log(Dog.prototype.isPrototypeOf(dog)); // true
})();
