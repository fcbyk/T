/**
 * 构造函数(constructor)
 * JavaScript中每个原型对象都有一个constructor属性，指向构造函数
 */
(() => {
    function Person(name) {
        this.name = name;
    }
    
    let person1 = new Person('Alice');
    
    console.log(person1.constructor === Person); // true
    console.log(Person.prototype.constructor === Person); // true

})();