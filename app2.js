/**
 * 隐式原型（Implicit Prototype）
 * 隐式原型（也称为 __proto__）是每个 JavaScript 对象都具有的一个属性，它指向该对象的原型。
 * 
 * 在 JavaScript 中，通常是通过显式原型去修改和定义对象的原型，而不是直接操作隐式原型。
 * 这是因为隐式原型 __proto__ 是作为对象的内部属性存在的，并不推荐直接访问或修改它，因为它可以直接影响到整个原型链的结构和继承关系，可能导致意料之外的行为。
 * __proto__ 是非标准的访问方式，在一些 JavaScript 引擎或环境中可能不被完全支持或存在兼容性问题。
 */
(()=>{

    function Person(name) {
        this.name = name;
    }

    let zhangsan = new Person("张三");

    console.log(Person.prototype === zhangsan.__proto__);  // true

    Person.prototype.age = 10                   // 推荐使用显示原型进行访问及修改
    zhangsan.__proto__.school = "青青草原"      // 不推荐使用隐式原型进行访问及修改
})()
