import { User } from './app2.js';

// 使用 extends 关键字实现继承
// Student 类的原型 (Student.prototype) 会被设为 User 类的一个实例
class Student extends User{

    constructor(name) {
        // 继承时必须在子类构造函数中调用 super() 执行父类构造函数
        super(name);

        //使用super 可以执行父类方法
        super.show();
    }

    // 方法覆盖
    show(){ 
        console.log("sub show") 
    }
}