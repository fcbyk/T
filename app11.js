/**
 * 原型式继承
 * 原型式继承的思想和渊源
 * 这种模式要从道格拉斯·克罗克福德（Douglas Crockford, 著名的前端大师, JSON 的创立者）在 2006 年写的一篇文章说起: Prototypal Inheritance in JavaScript(在 JS 中使用原型式继承)
 * 在这篇文章中, 它介绍了一种继承方法, 而且这种继承方法不是通过构造函数来实现的.
 * 为了理解这种方式, 我们先再次回顾一下 JavaScript 想实现继承的目的: 重复利用另外一个对象的属性和方法
 */
(() => {
    // 原型式继承的核心函数
    // 封装objectA()函数
    function objectA(o) {
        function F() {}
        F.prototype = o;
        return new F();
    }
    // 在 object()函数内部, 先创建一个临时的构造函数
    // 然后将传递的对象作为这个构造函数的原型
    // 最后返回了这个临时类型的一个新的实例
    // 事实上, object()对传入的对象执行了一次浅复制（注意不是浅拷贝）
    // 理解为创建了一个o类型的空实例对象，空实例对象可以用o对象的属性和方法

    // 原型式继承的使用
    // 使用原生式继承
    let dog8 = {
        name: '小明',
        colors: ['red', 'green'],
    };

    // 通过dog8去创建另外一个对象
    let dog9 = objectA(dog8);
    dog9.name = '小小明';
    dog9.colors.push('blue');

    console.log(dog8.name); // 小明
    console.log(dog8.colors); // red,green,blue

    console.log(dog9.name); // 小小明
    console.log(dog9.colors); // red,green,blue

    console.log(dog8); 
    console.log(dog9);

    // 这种方式和我们传统意义上理解的继承有些不同. 它做的事情是通过一个对象去创建另外一个对象.(利用 dog8 去创建 dog9)
    // 当然, dog9 中继承过来的属性是放在了自己的原型对象中的.
    // 也可以给 dog9 自己再次添加 name 属性, 这个时候 name 才是在实例本身中.
    // 但是如果是修改或者添加引用类型的内容, 还是会引起连锁反应.
    // 可能暂时你看不到这些代码的意义, 但是这些代码是我们后续最终方案的前提思想, 所以先看看和练习一下这些代码.

    // 针对这种思想, ES5 中新增了 Object.create()方法来规范化了原型式继承
    // create是Object构造函数对象的一个属性，这个属性也是一个函数对象，所以可以调用
    // 也就是上面的代码可以修改成这样(只是将 object 函数修改成了 Object.create)
    let dog10 = {
        name: '小明',
        colors: ['red', 'green'],
    };

    let dog11 = Object.create(dog10);
    dog11.name = '小小明';
    dog11.colors.push('blue');

    console.log(dog10.name); // 小明
    console.log(dog10.colors); // red,green,blue

    console.log(dog11.name); // 小小明
    console.log(dog11.colors); // red,green,blue

    console.log(dog10); 
    console.log(dog11);

    // Object.create()还可以传入第二个参数
    // 第二个参数用于每个属性的自定义描述
    let dog12 = Object.create(dog10,{
        name:{
            value:"语雀"
        }
    })
    console.log(dog12); 

    // 原型式继承的的优点和缺点
    // 如果我们只是希望一个对象和另一个对象保持类似的情况下, 原型式继承完全可以胜任, 这是它的优势.
    // 但是, 原型式继承依然存在属性共享的问题, 就像使用原型链一样
})();
