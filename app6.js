/**
 * 解构赋值
 * 解构是一种更简洁的赋值特性
 * 快速从 数组/对象 里拆出变量
 */

// 基础用法
(() => {
    const user = { name: "小明", age: 18 }

    // 传统写法
    // const name = user.name
    // const age = user.age

    // 解构写法
    const { name, age } = user
})();


// 重命名（变量名和属性名不一样）
(() => {
    const user = { name: "小明", age: 18 }
    const { name: userName, age: userAge } = user
    console.log(userName, userAge)
})();


// 默认值（取不到时生效）
(() => {
    const user = { name: "小明", age: 18 }
    const { name, gender = "男" } = user
    console.log(name, gender)
})();


// 数组解构
(() => {
    const arr = [10, 20, 30];
    const [a, b, c] = arr;
    console.log(a, b, c)
})();

// 跳过某些项
(() => {
    const arr = [10, 20, 30];
    const [a, , c] = arr;
    console.log(a, c)
})();


// 剩余项（...rest）
(() => {
    const arr = [10, 20, 30];
    const [a, ...rest] = arr;
    console.log(rest)
})();


// 嵌套解构（复杂对象 / 数组）
(() => {
    const user = { name: "小明", age: 18, address: { city: "北京" } }
    const { name, address: { city } } = user
    console.log(name, city)
})();


// 函数参数解构
(() => {
    function hd({ name, age }) {
        console.log(name, age)
    }
    hd({ name: "小明", age: 18 })
})();


// 函数参数解构（默认值）
(() => {
    function hd({ name, age = 18 }) {
        console.log(name, age)
    }
    hd({ name: "小明" })
})();


// 函数参数解构（剩余项）
(() => {
    function hd({ name, ...rest }) {
        console.log(name, rest)
    }
    hd({ name: "小明", age: 18, gender: "男" })
})();


// 交换变量不用临时变量（使用场景）
(() => {
    let a = 10;
    let b = 20;
    [a, b] = [b, a];
    console.log(a, b)
})();
