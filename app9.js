/**
 * 经典继承
 * 为了解决原型链继承中存在的问题, 开发人员提供了一种新的技术: constructor stealing
 * (有很多名称: 借用构造函数或经典继承或伪造对象), steal 是偷窃的意思, 但是这里可以翻译成借用
 * 经典继承的做法非常简单: 在子类型构造函数的内部调用父类型构造函数
 */
function constructorStealing(){
    // 创建Animal的构造函数
    function Animal(age) {
        this.colors = ['red', 'green'];
        this.age = age;
    }

    // 创建Dog的构造函数
    function Dog(age) {
        // 继承Animal的属性
        // 也可以传递参数
        Animal.call(this, age);

        // 给自己的属性赋值
        this.name = 'ZHANG';
    }

    // 创建Dog对象
    let dog4 = new Dog();
    let dog5 = new Dog(10);

    console.log(dog4.colors);   // red,green
    console.log(dog5.colors);   // red,green
    dog4.colors.push('blue');
    console.log(dog4.colors);   // red,green,blue
    console.log(dog5.colors);   // red,green
    console.log(dog5.age);      // 10

    // 我们通过在 Dog 构造函数中, 使用 call 函数, 将 this 传递进去
    // 这个时候, 当 Animal 中有相关属性初始化时, 就会在 this 对象上进行初始化操作
    // 这样就实现了类似于继承 Animal 属性的效果

    // 经典继承的问题
    // 对于经典继承理解比较深入, 你已经能发现: 经典继承只有属性的继承, 无法实现方法的继承
    // 因为调用 call 函数, 将 this 传递进去, 只能将父构造函数中的属性初始化到 this 中
    // 但是如果函数存在于父构造函数的原型对象中, this 中是不会有对应的方法的
}