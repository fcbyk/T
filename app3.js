/**
 * 工厂模式创建对象（创建对象方式3）
 * 工厂模式是一种非常常见的设计模式, 这种模式抽象了创建具体对象的过程.
 * 因为 JavaScript 中没法创建类, 开发人员就发明了一种函数, 用函数来封装以特定接口创建对象的细节
 */
(()=>{

    function createPerson(name, age, height) {
        let o = new Object();
        o.name = name;
        o.age = age;
        o.height = height;

        o.sayHello = function () {
            console.log('Hello, My name is ' + this.name);
        };
        return o;
    }

    // 创建两个对象
    let person1 = createPerson('张三', 22, 188);
    let person2 = createPerson('李四', 20, 203);
    person1.sayHello(); 
    person2.sayHello(); 

    //另一种写法
    function createStudent(n) {
        return {
            name:n,
            show() {
                console.log(this.name);
            }
        }
    }

})()