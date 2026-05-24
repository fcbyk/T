/**
 * 显式原型（explicit prototype）
 * 显式原型是通过构造函数的 prototype 属性显式设置的对象
 * 在构造函数中，可以通过将方法和属性直接赋值给构造函数的 prototype 属性来定义这些方法和属性
 */
(() => {
    function Person(name) {
        this.name = name;
    }
    
    Person.prototype.sayHello = function() {
        console.log('Hello, my name is ' + this.name);
    };
    
    let person1 = new Person('Alice');
    let person2 = new Person('Bob');
    
    person1.sayHello(); // 输出 "Hello, my name is Alice"
    person2.sayHello(); // 输出 "Hello, my name is Bob"
})();
