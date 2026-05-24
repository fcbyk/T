/**
 * 数据类型的转换
 * 分隐式转化和显式转换，即自动转换和强制类型转换
 */

// 转换为字符串 - 隐式转换
(() => {
    //利用 + 拼接字符串的方法实现转换效果 隐式转换
    let num = 10
    console.log(typeof num)
    num=num+''
    console.log(typeof num)
})();


// 转换为字符串 - String构造函数
(() => {
    //使用 String 构造函数可以显式转换字符串类型
    let a = 99;
    console.log(typeof String(a));
})();


// 转换为字符串 - toString方法
(() => {
    //使用类方法 toString 显式转化为字符串
    let b = 99;
    console.log(typeof b.toString()); //string
    let arr = ['hdcms', 'hello'];
    console.log(typeof arr.toString()); //string
})();


// 转换为数字 - 隐式转换
(() => {
    //使用乘法进行隐式类型转换
    console.log("66" * 1 + 5);  //71
})();


// 转换为数字 - Number函数
(() => {
    //使用 Number 函数基本上可以转换所有类型
    console.log(Number('houdunren')); //NaN
    console.log(Number(true));	//1
    console.log(Number(false));	//0
    console.log(Number('9'));	//9
    console.log(Number([]));	//0
    console.log(Number([5]));	//5
    console.log(Number([5, 2]));	//NaN
    console.log(Number({}));	//NaN
})();


// 转换为整数 - parseInt
(() => {
    //还有一些其他的对象方法可以转换，比如转化为浮点数
    // parseInt( )  提取字符串开始去除空白后的数字转为整数。
    console.log(parseInt('3.14')); // 3 取整
    console.log(parseInt('3.94')); // 3 取整，直接抛弃小数位
    console.log(parseInt('120px')); // 120 会去掉这个px单位
    console.log(parseInt('rem120px')); // NaN
    console.log(parseInt('  99houdunren'));	//99
})();


// 转换为浮点数 - parseFloat
(() => {
    // parseFloat( ) 转换字符串为浮点数，忽略字符串前面空白字符。
    console.log(parseFloat('3.14')); // 3.14
    console.log(parseFloat('120px')); // 120 会去掉这个px单位
    console.log(parseFloat('rem120px')); // NaN
})();


// 转换为布尔型 - 隐式转换
(() => {
    //基本上所有类型都可以隐式转换为 Boolean 类型
    
    //如果使用 Boolean 与数值比较时
    //会进行隐式类型转换 true 转为 1，false 转为 0
    console.log(3 == true); //false
    console.log(0 == false); //true
})();


// 字符串与Boolean比较
(() => {
    //字符串在与 Boolean 比较时，两边都为转换为数值类型后再进行比较
    console.log(Number("houdunren")); //NaN
    console.log(Boolean("houdunren")); //true
    console.log("houdunren" == true); //false
    console.log("1" == true); //true
})();


// 数组与Boolean比较
(() => {
    //数组与 Boolean 比较时
    //表现与字符串原理一样，会先转换为数值
    console.log(Number([])); //0
    console.log(Number([3])); //3
    console.log(Number([1, 2, 3])); //NaN
    console.log([] == false); //true
    console.log([1] == true); //true
    console.log([1, 2, 3] == true); //false
})();


// 引用类型的Boolean值
(() => {
    //引用类型的 Boolean 值为真，如对象和数组
    if ([]) console.log("true");
    if ({}) console.log("true");
})();


// 使用!!转换布尔类型
(() => {
    //使用!!转换布尔类型
    let hd = '';
    console.log(!!hd); //false
    hd = 0;
    console.log(!!hd); //false
    hd = null;
    console.log(!!hd); //false
    hd = new Date("2020-2-22 10:33");
    console.log(!!hd); //true
})();


// 使用Boolean函数显式转换
(() => {
    //使用 Boolean 函数显式转换为布尔类型
    console.log(Boolean('')); // false
    console.log(Boolean(0)); // false
    console.log(Boolean(NaN)); // false
    console.log(Boolean(null)); // false
    console.log(Boolean(undefined)); // false
})();