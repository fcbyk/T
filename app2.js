export class User {
    
    // 构造函数（不支持重载）
    // 如不些构造函数，系统默认的构造函数为-> constructor(...args) { super(...args) }
    constructor(name) {

        // 这里声明的属性和方法都在实例对象上
        this.name = name;
        this.show = function() {
            console.log("hello " + this.name);
        };

        // 原型链的构造函数是一样的
        console.log(User == User.prototype.constructor) //true
    }

    // 实例属性不在原型上，在实例上，静态属性在构造方法上
    instanceAttribute = "实例属性"
    static staticAttribute = '静态属性'

    // 实例方法在原型对象上
    getName() { 
        return this.name; 
    }

    show() { 
        console.log("super hello") 
    }

    // 静态方法在构造函数上
    static fun() { 
        console.log("我是静态方法") 
    }

    // 私有属性和方法
    // private 私有属性和Java一样，只在当前类可以访问到，并且不允许继承使用
    // JavaScript中为属性或方法名前加 # 为声明为私有属性
    // 私有属性只能在声明的类中使用
    #privateAttr = 123456
    #privateMethod(){ 
        console.log("私有方法") 
    }
}