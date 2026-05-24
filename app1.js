/**
 * 使用Object构造函数创建对象（创建对象方式1）
 * 创建自定义对象最简单的方式就是创建一个 Object 实例, 然后添加属性和方法
 */
(() => {
    // 1.创建person1的对象
    let person = new Object();

    // 2.给person1对象赋值了一些动态的属性和方法
    person.name = '张三';
    person.age = 22;
    person.height = 175;

    person.sayHello = function () {
        console.log('Hello, My name is ' + this.name);
    };

    // 3.使用点语法操作对象属性
    person.sayHello();
})()