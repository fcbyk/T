/**
 * 原型链存在的问题
 * 原型链存在最大的问题是关于引用类型的属性.
 * 通过上面的原型实现了继承后, 子类的 Dog 对象继承了(可以访问)Animal 实例中的属性(animalProperty).
 * 但是如果这个属性是一个引用类型(比如数组或者其他引用类型), 就会出现问题.
 */
(() => {
    // 引用类型的问题代码:
    // 1.定义Animal的构造函数
    function Animal() {
        this.colors = ['red', 'green'];
    }

    // 2.给Animal添加方法
    Animal.prototype.animalFunction = function () {
        alert(this.colors);
    };

    // 3.定义Dog的构造函数
    function Dog() {
        this.dogProperty = 'Dog';
    }

    // 4.给Dog赋值新的原型对象
    Dog.prototype = new Animal();

    // 5.给Dog添加方法
    Dog.prototype.personFunction = function () {
        alert(this.dogProperty);
    };

    // 6.创建Dog对象, 并且调用方法
    let dog2 = new Dog();
    let dog3 = new Dog();

    console.log(dog2.colors); // red,green
    console.log(dog3.colors); // red,green

    dog2.colors.push('blue');

    console.log(dog2.colors); // red,green,blue
    console.log(dog3.colors); // red,green,blue

    // 修改了 dog2 中的 colors 属性, 添加了一个新的颜色 blue
    // 再次查看两个对象的 colors 属性, 会发现 dog3 的 colors 属性也发生了变化
    // 两个实例应该是相互独立的, 这样的变化如果我们不制止将会在代码中引发一些列问题.

    // 原型链的其他问题
    // 在创建子类型的实例时，不能向父类型的构造函数中传递参数
    // 实际上，应该说是没有办法在不影响所有对象实例的情况下，给父类型的构造函数传递参数
    // 从而可以修改父类型中属性的值, 在创建构造函数的时候就确定一个值
})();