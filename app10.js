/**
 * 组合继承
 * 如果你认识清楚了上面两种实现继承的方式存在的问题, 就可以很好的理解组合继承了
 * 组合继承(combination inheritance, 有时候也称为伪经典继承)
 * 组合继承就是发挥原型链和经典继承各自的优点来完成继承的实现
 * 使用原型链实现对原型属性和方法的继承
 * 通过经典继承实现对实例属性的继承, 以及可以在构造函数中传递参数
 */
(() => {
    // 1.创建构造函数的阶段
    // 1.1.创建Animal的构造函数
    function Animal(age) {
        this.age = age;
        this.colors = ['red', 'green'];
    }

    // 1.2.给Animal添加方法
    Animal.prototype.AnimalFunction = function () {
        console.log('Hello Animal');
    };

    // 1.3.创建Dog的构造函数
    function Dog(name, age) {
        Animal.call(this, age);
        this.name = name;
    }

    // 1.4.给Dog的原型对象重新赋值
    Dog.prototype = new Animal(0);

    // 1.5.给Dog添加方法
    Dog.prototype.DogFunction = function () {
        console.log('Hello Dog');
    };

    // 2.验证和使用的代码
    // 2.1.创建Dog对象
    let dog6 = new Dog('zcoder', 18);
    let dog7 = new Dog('www', 38);

    // 2.2.验证属性
    console.log(dog6.name + '-' + dog6.age); // zcoder-18
    console.log(dog7.name + '-' + dog7.age); // www-38

    // 2.3.验证方法的调用
    dog6.AnimalFunction(); // Hello Animal
    dog6.DogFunction(); // Hello Dog

    // 2.4.验证引用属性的问题
    dog6.colors.push('blue');
    console.log(dog6.colors); // red,green,blue
    console.log(dog7.colors); // red,green

    // 组合继承是 JavaScript 最常用的继承模式之一
    // 如果你理解到这里, 点到为止, 那么组合来实现继承只能说问题不大, 但是它依然不是很完美

    // 组合继承最大的问题就是无论在什么情况下, 都会调用两次父类构造函数.
    // 一次在创建子类原型的时候
    // 另一次在子类构造函数内部(也就是每次创建子类实例的时候)
    // 另外, 值得注意的是, 所有的子类实例事实上会拥有两份父类的属性
    // 一份在当前的实例自己里面(也就是 dog6 本身的), 另一份在子类对应的原型对象中(也就是 dog6.proto里面)
    // 当然, 这两份属性我们无需担心访问出现问题, 因为默认一定是访问实例本身这一部分的
})();
