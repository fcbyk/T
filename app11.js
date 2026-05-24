/**
 * 剩余参数 (Rest Parameters)
 * ES6 引入的剩余参数语法，比 arguments 更强大
 * 可以将不定数量的参数表示为一个数组
 */

// 基本用法
(() => {
    function sum(...numbers) {
        console.log(numbers);  // 真正的数组
        console.log(Array.isArray(numbers));  // true
        
        return numbers.reduce((total, num) => total + num, 0);
    }
    
    console.log(sum(1, 2, 3, 4, 5));  // 15
})();

// 剩余参数必须放在最后
(() => {
    function greet(greeting, ...names) {
        console.log(greeting);  // "Hello"
        console.log(names);  // ["小明", "小红", "小刚"]
        
        names.forEach(name => {
            console.log(`${greeting}, ${name}!`);
        });
    }
    
    greet("Hello", "小明", "小红", "小刚");
})();

// 与普通参数结合使用
(() => {
    function multiply(multiplier, ...numbers) {
        return numbers.map(num => num * multiplier);
    }
    
    console.log(multiply(2, 1, 2, 3, 4));  // [2, 4, 6, 8]
})();
