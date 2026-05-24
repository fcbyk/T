/**
 * 原型链
 * 我们知道, 可以通过 PersonI.prototype = {}的方式来重写原型对象
 * 假如, 我们后面赋值的不是一个{}, 而是另外一个类型的实例, 结果会是怎么样呢
 * 显然，此时的原型对象将包含一个指向另一个原型的指针，相应地，另一个原型中也包含着一个指向另一个构造函数的指针
 * 假如另一个原型又是另一个类型的实例，那么上述关系依然成立，如此层层递进，就构成了实例与原型的链条。这就是所谓原型链的基本概念
 */
export default (() => {

    // 创建Animal的构造函数
    function Animal() {
        this.animalProperty = '动物';
    }

    // 给Animal的原型中添加一个方法
    Animal.prototype.animalFunction = function () {
        console.log(this.animalProperty);
    };

    // 创建Dog的构造函数
    function Dog() {
        this.dogProperty = '狗';
    }

    // 给Dog的原型对象重新赋值
    Dog.prototype = new Animal();

    // 给Dog添加属于自己的方法
    Dog.prototype.dogFunction = function () {
        console.log(this.dogProperty);
    };

    // 创建Dog的实例
    let dog = new Dog();
    dog.animalFunction(); //动物
    dog.dogFunction(); //狗

    /**
     * 创建 dog 对象, dog 对象会有自己的属性, dogProperty
     * 另外, dog 对象有一个 proto 指向 Dog 的原型
     * Dog 的原型是谁呢? 就是我们之前的 new Animal(Animal 的一个实例), 所以会指向它
     */

    // constructor 问题
    console.log(dog)
    console.log(dog.constructor) //构造器为 Animal, 在原型链上搜索constructor

    // 在Dog的新原型对象上添加构造器属性
    Object.defineProperty(Dog.prototype,'constructor', {
        enumerable: false,
        value: Dog,
    });

    console.log(dog)
    console.log(dog.constructor) //Dog

    return { Animal, Dog , dog }
})();
