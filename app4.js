/**
 * 数据类型与字面量
 * JS可以通过 typeof 关键字检测数据类型
 * 基本数据类型（Number、String、Boolean、Undefined、Null ）
 * 引用类型（Object）
 */

// 字面量示例
(() => {
    /**
     * 字面量
     * 字面量即不同类型数据的书写形式
     */
    return [
        18, // 整数
        -11, // 负数
        223.232, // 小数
        '18', // 字符串
        "18", 
        `www`,
        [], // 数组
        {}, // 对象
        true, // boolean
        undefined,
        null,
    ]
})();


// Number类型
(() => {
    //整数、小数、正数、负数、不是数字(NaN)、无穷大(Infinty) 都属于Number类型
    let score = 100; // 正整数
    let price = 12.345; // 小数
    let temperature = -40; // 负数
    console.log(typeof score); // 结果为 number
    console.log(typeof price); // 结果为 number
    console.log(typeof temperature); // 结果为 number
})();


// String类型
(() => {
    //通过单引号（ '' ） 、双引号（ "" ）或反引号包裹的数据都叫字符串，
    //单引号和双引号没有本质上的区别，推荐使用单引号。
    //无论单引号或是双引号必须成对使用
    //单引号/双引号可以互相嵌套，但是不以自已嵌套自已
    //必要时可以使用转义符 \ ，输出单引号或双引号
    let user_name = '小明'; // 使用单引号
    let gender = "男"; // 使用双引号
    let age = '18'; // 看上去是数字，但是用引号包裹了就成了字符串了
    let str = ''; // 这种情况叫空字符串

    console.log(typeof user_name); // 结果为 string
    console.log(typeof gender); // 结果为 string
    console.log(typeof str); // 结果为 string
})();


// 字符串拼接
(() => {
    //使用”+“运算符，进行字符串的拼接
    let age = '18';
    console.log('小明' + age + '岁');
    console.log('小明' + age + '岁');
})();


// 模板字符串(ES6)
(() => {
    //模板字符串（template string）是增强版的字符串，用反引号 ` 标识
    //字符串中可以出现换行符
    //可以使用 ${xxx} 形式输出变量
    let name = 'jack';
    console.log(`hello, ${name}`);

    let ul = `<ul>
                <li>apple</li>
                <li>banana</li>
                <li>peach</li>
            </ul>`;
})();


// Boolean类型
(() => {
    //表示肯定或否定时在计算机中对应的是布尔类型数据
    //有两个固定的值 true 和 false
    var flag = true; // flag 布尔型 
    var flag1 = false; // flag1 布尔型
    console.log(flag + 1); // true 参与加法运算当1来看
    console.log(flag1 + 1); // false 参与加法运算当 0来看
})();


// Undefined类型
(() => {
    //变量声明了，但没有赋值，默认为undefined
    var a;
    console.log(a);
})();


// Null类型
(() => {
    //和C++，Java一样，空指针指向的内存是不可以访问的
    var obj = new Object();
    console.log(obj);
    obj = null;
    console.log(obj);
})();


// Object类型
(() => {
    //引用类型，在堆区
    let arr = ['123',123,'hello'];
    console.log(typeof arr);
})();
