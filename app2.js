/**
 * 使用对象字面量创建对象（创建对象方式2）
 * 字面量形式在系统内部也是使用构造函数 new Object 创建的
 */
(()=>{
    let person = {
        // 注意这里不是写语句
        // 所以结束符不是分号和换行符
        // 这里写属性（键值对），每个属性使用逗号分隔
        name: '李四',
        age: 20,
        height: 180,
    
        sayHello: function () {
            console.log('My name is ' + this.name);
        },
    
        //因为不是写语句，属性名可以不遵循标识符的规则
        100:'一百',
        200:function(){
            console.log("200方法调用");
        },
    
        //函数属性（方法）的简写形式,可以省略function
        setName(name){
            this.name = name
        }
    };
    
    person.sayHello();
    person.setName('王五');
    console.log(person.name);
    
    //如果属性名不是合法标识符，使用方扩号访问
    console.log(person[100]);
    person[200]();
})()