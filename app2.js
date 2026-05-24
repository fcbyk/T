/**
 * 赋值运算符
 * 等号赋值（=）：将右侧表达式的值赋给左侧的变量
 * 复合赋值运算符：结合赋值和其他运算，例如加法、减法、乘法等(+=、-=、*=、/=、%=)
 * 解构赋值：从数组或对象中提取值，然后对变量进行赋值
 */
function assignment(a = 5, b = 3) {
    console.log(a += b); // 等价于a=a+b
    console.log(a -= b); // 等价于a=a-b
    console.log(a *= b); // 等价于a=a*b
    console.log(a /= b); // 等价于a=a/b
    console.log(a %= b); // 等价于a=a%b
}

assignment();


/**
 * 解构赋值（Destructuring Assignment）是ES6（ECMAScript 2015）引入的一种语法，允许我们从数组或对象中提取值，然后对变量进行赋值。
 * 这样可以更简洁和直观地写出赋值语句。
 */
function arrayDestructuringAssignment() {
    // 数组解构赋值
    // 数组解构赋值允许我们按照数组元素的位置将其值赋给变量。
    let [a, b] = [1, 2];
    console.log(a); // 输出: 1
    console.log(b); // 输出: 2

    // 跳过某些元素
    let [c, , d] = [3, 4, 5];
    console.log(c); // 输出: 3
    console.log(d); // 输出: 5

    // 剩余元素
    let [e, ...rest] = [6, 7, 8, 9];
    console.log(e);    // 输出: 6
    console.log(rest); // 输出: [7, 8, 9]

    // 默认值
    let [f, g = 10] = [7];
    console.log(f); // 输出: 7
    console.log(g); // 输出: 10 （因为没有给 g 提供值，所以使用默认值 10）

    let [...arr] = [2, 8, 3, 5];
    console.log(arr);
}

arrayDestructuringAssignment();


function objectDestructuringAssignment() {
    // 对象解构赋值
    // 对象解构赋值允许我们从对象的属性中提取值并赋给变量
    // 基本用法
    let { name, age } = { name: 'Alice', age: 25 };
    console.log(name); // 输出: Alice
    console.log(age);  // 输出: 25

    // 更改变量名
    let { name: userName, age: userAge } = { name: 'Bob', age: 30 };
    console.log(userName); // 输出: Bob
    console.log(userAge);  // 输出: 30

    // 默认值
    let { country = 'China', city } = { city: 'Beijing' };
    console.log(country); // 输出: China
    console.log(city);    // 输出: Beijing

    // 嵌套解构
    let person = {
        pName: 'Charlie',
        pAddress: {
            street: '123 Main St',
            city: 'Wonderland'
        }
    };
    let { pName, pAddress: { street, city: pCity } } = person;
    console.log(pName);   // 输出: Charlie
    console.log(street);  // 输出: 123 Main St
    console.log(pCity);   // 输出: Wonderland
}

objectDestructuringAssignment();

function parameterDestructuringAssignment() {

    // 函数参数中的解构赋值
    // 解构赋值还可以用于函数参数，使得函数能够直接处理对象或数组的属性

    // 数组参数解构
    // 等价于 let [x, y] = [1, 2]
    function sum([x, y]) {
        return x + y;
    }
    console.log(sum([1, 2])); // 输出: 3

    // 对象参数解构
    // 等价于 let { name, age } = { name: 'Dave', age: 40 };
    function greet({ name, age }) {
        console.log(`Hello, my name is ${name} and I am ${age} years old.`);
    }
    greet({ name: 'Dave', age: 40 }); // 输出: Hello, my name is Dave and I am 40 years old.

}

parameterDestructuringAssignment();
