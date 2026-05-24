/**
 * 寄生式继承
 * 寄生式继承的思想
 * 寄生式(Parasitic)继承是与原型式继承紧密相关的一种思想, 并且同样由道格拉斯·克罗克福德(Douglas Crockford)提出和推广的
 * 寄生式继承的思路是结合原型类继承和工厂模式的一种方式
 * 即创建一个封装继承过程的函数, 该函数在内部以某种方式来增强对象, 最后再将这个对象返回
 */
(() => {
    // 寄生式函数多增加了一个核心函数
    // 封装objectB函数
    function objectB(o) {
        function F() { }
        F.prototype = o;
        return new F();
    }

    // 封装创建新对象的函数
    function createAnother(original) {
        let clone = objectB(original);
        clone.sayHello = function () {
            console.log('Hello JavaScript');
        };
        return clone;
    }

    // 我们来使用一下寄生式继承
    // person17对象
    let person17 = {
        name: 'zcoder',
        colors: ['red', 'green'],
    };

    // 新的对象
    let person18 = createAnother(person17);
    person18.sayHello();

    console.log(person17)
    console.log(person18)

    // 我们基于 person 对象, 创建了另外一个对象 person1
    // 在最新的 person1 对象中, 不仅会拥有 person 的属性和方法, 而且还有自己定义的方法

    // 寄生式继承存在的问题:
    // 寄生式继承和原型式继承存在一样的问题, 引用类型会共享 (因为是在原型式继承基础上的一种封装)
    // 另外寄生式继承还存在函数无法复用的问题, 因为每次 createAnother 一个新的对象, 都需要重新定义新的函数(和之前的工厂函数一样)
})();
