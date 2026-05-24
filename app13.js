/**
 * 寄生组合式继承
 * 现在我们来回顾一下之前提出的比较理想的组合继承
 * 组合继承是比较理想的继承方式, 但是存在两个问题
 * 问题一: 构造函数会被调用两次: 一次在创建子类型原型对象的时候, 一次在创建子类型实例的时候
 * 问题二: 父类型中的属性会有两份: 一份在原型对象中, 一份在子类型实例中
 * 
 * 事实上, 我们现在可以利用寄生式继承将这两个问题给解决掉
 * 你需要先明确一点: 当我们在子类型的构造函数中调用父类型.call(this, 参数)这个函数的时候, 就会将父类型中的属性和方法复制一份到了子类型中. 所以父类型本身里面的内容, 我们不再需要
 * 这个时候, 我们还需要获取到一份父类型的原型对象中的属性和方法
 * 能不能直接让子类型的原型对象 = 父类型的原型对象呢?
 * 不要这么做, 因为这么做意味着以后修改了子类型原型对象的某个引用类型的时候, 父类型原生对象的引用类型也会被修改.
 * 我们使用前面的寄生式思想就可以了.
 */
(() => {

    // 寄生组合式的核心代码
    // 定义object函数
    function objectC(o) {
        function F() {}
        F.prototype = o;
        return new F();
    }

    // 定义寄生式核心函数
    function inhreitPrototype(subType, superType) {
        // let prototype = objectC(superType.prototype);
        // 可以使用create函数代替
        let prototype = Object.create(superType.prototype);
        prototype.constructor = subType;
        subType.prototype = prototype;
    }

    // 定义AnimalE构造函数
    function AnimalE(age) {
        this.age = age;
        this.colors = ['red', 'green'];
    }

    // 给AnimalE添加方法
    AnimalE.prototype.AnimalEFunction = function () {
        alert('Hello AnimalE');
    };

    // 定义DogE构造函数
    function DogE(name, age) {
        AnimalE.call(this, age);
        this.name = name;
    }

    // 使用寄生组合式核心函数
    inhreitPrototype(DogE, AnimalE);

    // 给DogE添加方法
    DogE.prototype.DogEFunction = function () {
        console.log('Hello DogE');
    };

    let dog13 = new DogE("张三疯",18);
    console.log(dog13)
    console.log(dog13.__proto__)

    // 这种方式的高效体现在现在它只调用了一次 Animal 的构造函数
    // 并且也避免了在原型上面多出的多余属性, 而且原型之间不会产生任何的干扰(子类型原型和父类型原型之间)
    // 在 ES5 中, 普遍认为寄生组合式继承是最理想的继承范式
})();
