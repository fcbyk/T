/**
 * JavaScript String 字符串常用方法
 */

// 字符串基础
(()=>{
    // 字符串字面量
    let str1 = "Hello World";
    let str2 = 'Hello World';
    let str3 = `Hello World`; // 模板字符串

    // 模板字符串支持插值
    let name = "World";
    let greeting = `Hello ${name}`;
    console.log(greeting); // "Hello World"

    // 多行字符串
    let multiLine = `第一行
第二行
第三行`;
    console.log(multiLine);

    // 字符串长度
    console.log(str1.length); // 11
})();

// 字符串访问与提取
(()=>{
    let str = "Hello World";

    // charAt()：获取指定位置的字符
    console.log(str.charAt(0)); // "H"
    console.log(str.charAt(6)); // "W"

    // charCodeAt()：获取字符的 Unicode 编码
    console.log(str.charCodeAt(0)); // 72

    // 方括号访问（ES5+）
    console.log(str[0]); // "H"
    console.log(str[6]); // "W"

    // slice()：提取子字符串
    console.log(str.slice(0, 5)); // "Hello"
    console.log(str.slice(6)); // "World"
    console.log(str.slice(-5)); // "World"（负数从末尾开始）

    // substring()：类似 slice，但不接受负数
    console.log(str.substring(0, 5)); // "Hello"
    console.log(str.substring(6, 11)); // "World"

    // substr()：已废弃，不推荐使用
    console.log(str.substr(6, 5)); // "World"
})();

// 字符串查找
(()=>{
    let str = "Hello World, Hello JavaScript";

    // indexOf()：从前向后查找
    console.log(str.indexOf("Hello")); // 0
    console.log(str.indexOf("Hello", 1)); // 13（从索引1开始查找）
    console.log(str.indexOf("World")); // 6
    console.log(str.indexOf("xyz")); // -1（未找到）

    // lastIndexOf()：从后向前查找
    console.log(str.lastIndexOf("Hello")); // 13
    console.log(str.lastIndexOf("World")); // 6

    // includes()：判断是否包含（ES6）
    console.log(str.includes("World")); // true
    console.log(str.includes("xyz")); // false
    console.log(str.includes("Hello", 10)); // true（从索引10开始）

    // startsWith() / endsWith()：判断开头/结尾（ES6）
    console.log(str.startsWith("Hello")); // true
    console.log(str.endsWith("Script")); // true
    console.log(str.startsWith("World", 6)); // true
})();

// 字符串替换
(()=>{
    let str = "Hello World";

    // replace()：替换第一个匹配
    console.log(str.replace("World", "JavaScript")); // "Hello JavaScript"
    
    // 使用正则全局替换
    let str2 = "aaa bbb aaa";
    console.log(str2.replace(/aaa/g, "ccc")); // "ccc bbb ccc"

    // replaceAll()：替换所有匹配（ES2021）
    console.log(str2.replaceAll("aaa", "ccc")); // "ccc bbb ccc"
})();

// 字符串转换
(()=>{
    let str = "  Hello World  ";

    // trim()：去除首尾空格
    console.log(str.trim()); // "Hello World"
    console.log(str.trimStart()); // "Hello World  "
    console.log(str.trimEnd()); // "  Hello World"

    // toUpperCase() / toLowerCase()：大小写转换
    console.log(str.toUpperCase()); // "  HELLO WORLD  "
    console.log(str.toLowerCase()); // "  hello world  "

    // padStart() / padEnd()：填充字符串（ES6）
    console.log("5".padStart(3, "0")); // "005"
    console.log("5".padEnd(3, "0")); // "500"
    console.log("abc".padStart(6, "xy")); // "xyxabc"

    // repeat()：重复字符串（ES6）
    console.log("abc".repeat(3)); // "abcabcabc"
})();

// 字符串分割与连接
(()=>{
    let str = "apple,banana,orange";

    // split()：分割为数组
    let fruits = str.split(",");
    console.log(fruits); // ["apple", "banana", "orange"]
    
    // 限制分割数量
    console.log(str.split(",", 2)); // ["apple", "banana"]

    // join()：数组连接为字符串
    console.log(fruits.join("-")); // "apple-banana-orange"
    console.log(fruits.join(" | ")); // "apple | banana | orange"
})();

// 字符串比较
(()=>{
    // localeCompare()：本地化比较
    console.log("a".localeCompare("b")); // -1（a 在 b 前）
    console.log("b".localeCompare("a")); // 1（b 在 a 后）
    console.log("a".localeCompare("a")); // 0（相等）

    // 中文排序
    let names = ["张三", "李四", "王五"];
    names.sort((a, b) => a.localeCompare(b, "zh-CN"));
    console.log(names); // ["李四", "王五", "张三"]
})();

// 模板字符串高级用法
(()=>{
    // 标签模板
    function highlight(strings, ...values) {
        return strings.reduce((result, str, i) => {
            return result + str + (values[i] ? `<strong>${values[i]}</strong>` : "");
        }, "");
    }

    let name = "World";
    let emotion = "Happy";
    console.log(highlight`Hello ${name}, I am ${emotion}!`);
    // "Hello <strong>World</strong>, I am <strong>Happy</strong>!"
})();
