/**
 * 打印原型链
 * 关于原型链,在谷歌浏览器控制台查看
 * [[Prototype]] 为内部属性，观察[[Prototype]]即可得到完整的原型链
 * 到最后会发现到object原型对象没有 [[Prototype]] 属性，即为null
 * [[Prototype]] 为内部属性不可访问，我们访问的是__proto__属性，而__proto__属性保存在了最后的object原型对象上
 */
(async () => {

    let { default: { Animal, Dog , dog } } = await import("./app5.js");

    // 查看原型链
    console.log(dog)                                           // Dog{}
    console.log(dog.__proto__)                                 // Animal{}
    console.log(dog.__proto__.__proto__)                       // {}    注: object对象前面没有名字
    console.log(dog.__proto__.__proto__.__proto__)             // {}
    console.log(dog.__proto__.__proto__.__proto__.__proto__)   // null

    // or
    console.log(dog)
    console.log(Dog.prototype)     
    console.log(Dog.prototype.__proto__)
    console.log(Dog.prototype.__proto__.__proto__)
    console.log(Dog.prototype.__proto__.__proto__.__proto__)

    // 狗实例 -> 动物实例(狗的原型) -> object实例(动物的原型) -> object原型 -> null

    // 查看一下浏览器内置的原型链
    console.log(window)                                                         // Window{}
    console.log(window.__proto__)                                               // Window{}
    console.log(window.__proto__.__proto__)                                     // WindowProperties{} 
    console.log(window.__proto__.__proto__.__proto__)                           // EventTarget{}
    console.log(window.__proto__.__proto__.__proto__.__proto__)                 // {}
    console.log(window.__proto__.__proto__.__proto__.__proto__.__proto__)       // null

    console.log(document)                                          
    console.log(document.__proto__)
    console.log(document.__proto__.__proto__)
    console.log(document.__proto__.__proto__.__proto__)
    console.log(document.__proto__.__proto__.__proto__.__proto__)
    console.log(document.__proto__.__proto__.__proto__.__proto__.__proto__)
    console.log(document.__proto__.__proto__.__proto__.__proto__.__proto__.__proto__)
})();