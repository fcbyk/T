/**
 * 构造函数模式（创建对象方式4）
 *
 * 对比工厂模式：
 * - 工厂模式：能创建对象，但无法识别对象类型
 * - 构造函数：不仅能创建对象，还能标识类型（instanceof / constructor）
 */

(() => {

    /**
     * 一、定义构造函数
     * 特点：
     * 1. 函数名首字母大写（约定）
     * 2. 通过 this 给实例添加属性和方法
     */
    function Person(name, age, height) {
        this.name = name;
        this.age = age;
        this.height = height;

        // 注意：这里的方法会被每个实例“各自创建一份”
        this.sayHello = function () {
            console.log(`你好，我是 ${this.name}`);
        };
    }


    /**
     * 二、使用构造函数创建对象
     * 必须使用 new 关键字
     */
    const p1 = new Person('张三', 22, 188);
    const p2 = new Person('李四', 20, 203);

    p1.sayHello(); // 你好，我是 张三
    p2.sayHello(); // 你好，我是 李四


    /**
     * 三、new 的底层做了什么（核心）
     *
     * new Person(...) 相当于：
     *
     * 1. 创建一个新对象 {}
     * 2. 将 this 指向这个新对象
     * 3. 执行构造函数代码（给对象添加属性）
     * 4. 默认返回这个新对象
     */


    /**
     * 四、类型识别（构造函数的优势）
     */

    // 1. constructor 属性
    console.log(p1.constructor === Person); // true
    console.log(p2.constructor === Person); // true

    // 2. instanceof
    console.log(p1 instanceof Person); // true
    console.log(p1 instanceof Object); // true

})();

/**
 * new 的本质就是：把一个函数当作“构造器”来执行，从而创建对象
 * new 改变了两件事：this 的指向、返回值的规则
 */