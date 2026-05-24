/**
 * JavaScript 数组基础与常用方法
 */

// 创建数组
(()=>{
    // 构造函数方式（不推荐）
    let ar1 = new Array(); 

    // 字面量方式（推荐）
    let ar2 = [];
    let arr1 = [1, 2, 'pink老师', true];

    // 多维数组
    const array1 = [["hdcms"], ["houdunren"]];
    console.log(array1[1][0]); // "houdunren"

    // const 声明的数组可修改内容
    const array2 = ["hdcms", "houdunren"];
    array2.push("houdunwang");
    console.log(array2); // ["hdcms", "houdunren", "houdunwang"]
})();

// 数组赋值与访问
(()=>{
    // 通过索引赋值
    let hd = ["后盾人"];
    hd[1] = "hdcms";

    // 跳过索引赋值会产生空位
    let hd2 = ["后盾人"];
    hd2[3] = "hdcms";
    console.log(hd2.length); // 4
    console.log(hd2); // ["后盾人", empty × 2, "hdcms"]

    // 访问数组元素
    let arr2 = ['迪丽热巴', '古丽扎娜', '佟丽丫丫'];
    console.log(arr2[0]); // "迪丽热巴"
    console.log(arr2[1]); // "古丽扎娜"
    console.log(arr2[2]); // "佟丽丫丫"
    console.log(arr2[3]); // undefined（索引越界）
})();

// 数组属性
(()=>{
    let arr = new Array();
    console.log(arr); // []

    // length 属性：获取或设置数组长度
    console.log(arr.length); // 0
    arr.push("123");
    console.log(arr.length); // 1

    // prototype 属性：向数组原型添加方法
    Array.prototype.test = "尼禄";
    console.log(arr.test); // "尼禄"
})();

// 数组增删方法
(()=>{
    let fruits = ["Banana", "Orange", "Apple", "Mango"];

    // push()：末尾添加元素，返回新长度
    let len = fruits.push("Kiwi", "Lemon");
    console.log(len); // 6
    console.log(fruits); // ["Banana", "Orange", "Apple", "Mango", "Kiwi", "Lemon"]

    // pop()：删除末尾元素，返回被删除的元素
    console.log(fruits.pop()); // "Lemon"
    console.log(fruits); // ["Banana", "Orange", "Apple", "Mango", "Kiwi"]

    // shift()：删除首元素，返回被删除的元素
    console.log(fruits.shift()); // "Banana"
    console.log(fruits); // ["Orange", "Apple", "Mango", "Kiwi"]

    // unshift()：开头添加元素，返回新长度
    console.log(fruits.unshift("Lemon", "Pineapple")); // 6
    console.log(fruits); // ["Lemon", "Pineapple", "Orange", "Apple", "Mango", "Kiwi"]

    // splice()：灵活增删元素
    // 参数：splice(index, deleteCount, item1, item2, ...)
    console.log(fruits.splice(2)); // 删除索引2及之后的所有元素
    console.log(fruits); // ["Lemon", "Pineapple"]
    
    console.log(fruits.splice(1, 0, "Apple")); // 在索引1插入"Apple"，不删除
    console.log(fruits); // ["Lemon", "Apple", "Pineapple"]
    
    console.log(fruits.splice(1, 1, "Orange")); // 替换索引1的元素
    console.log(fruits); // ["Lemon", "Orange", "Pineapple"]

    // concat()：合并数组，返回新数组
    let a = ["Google", "Taobao"];
    let b = ["Runoob", "Wiki", "Zhihu"];
    let c = a.concat(b);
    console.log(c); // ["Google", "Taobao", "Runoob", "Wiki", "Zhihu"]
})();

// 数组迭代器
(()=>{
    let fruits = ["Banana", "Orange", "Apple", "Mango"];

    // entries()：返回键值对迭代器
    let entries = fruits.entries();
    console.log(entries.next().value); // [0, "Banana"]
    console.log(entries.next().value); // [1, "Orange"]

    // keys()：返回键（索引）迭代器
    let keys = fruits.keys();
    console.log(keys.next().value); // 0
    console.log(keys.next().value); // 1

    // values()：返回值迭代器
    let values = fruits.values();
    console.log(values.next().value); // "Banana"
    console.log(values.next().value); // "Orange"
})();

// 数组遍历方法
(()=>{
    let numbers = [1, 2, 3, 4, 5];

    // forEach()：遍历数组
    numbers.forEach((num, index) => {
        console.log(`索引${index}: ${num}`);
    });

    // map()：映射新数组
    let doubled = numbers.map(num => num * 2);
    console.log(doubled); // [2, 4, 6, 8, 10]

    // filter()：过滤数组
    let evens = numbers.filter(num => num % 2 === 0);
    console.log(evens); // [2, 4]

    // find()：查找第一个匹配元素
    let found = numbers.find(num => num > 3);
    console.log(found); // 4

    // some() / every()：检测条件
    console.log(numbers.some(num => num > 4)); // true
    console.log(numbers.every(num => num > 0)); // true
})();

// 数组排序与反转
(()=>{
    let fruits = ["Banana", "Orange", "Apple", "Mango"];
    
    // sort()：排序（默认按字符串排序）
    fruits.sort();
    console.log(fruits); // ["Apple", "Banana", "Mango", "Orange"]

    // 数字排序需传入比较函数
    let numbers = [40, 100, 1, 5, 25, 10];
    numbers.sort((a, b) => a - b); // 升序
    console.log(numbers); // [1, 5, 10, 25, 40, 100]
    
    numbers.sort((a, b) => b - a); // 降序
    console.log(numbers); // [100, 40, 25, 10, 5, 1]

    // reverse()：反转数组
    fruits.reverse();
    console.log(fruits); // ["Orange", "Mango", "Banana", "Apple"]
})();

// 数组转换与查找
(()=>{
    let fruits = ["Banana", "Orange", "Apple", "Mango"];

    // join()：数组转字符串
    console.log(fruits.join("-")); // "Banana-Orange-Apple-Mango"
    console.log(fruits.join(", ")); // "Banana, Orange, Apple, Mango"

    // indexOf() / lastIndexOf()：查找元素索引
    console.log(fruits.indexOf("Apple")); // 2
    console.log(fruits.indexOf("Grape")); // -1（未找到）

    // includes()：判断是否包含元素
    console.log(fruits.includes("Apple")); // true
    console.log(fruits.includes("Grape")); // false

    // slice()：截取数组（不修改原数组）
    let sliced = fruits.slice(1, 3);
    console.log(sliced); // ["Orange", "Apple"]
    console.log(fruits); // 原数组不变

    // flat()：扁平化嵌套数组
    let nested = [1, [2, [3, [4]]]];
    console.log(nested.flat()); // [1, 2, [3, [4]]]
    console.log(nested.flat(2)); // [1, 2, 3, [4]]
    console.log(nested.flat(Infinity)); // [1, 2, 3, 4]
})();
