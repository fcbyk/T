/**
 * 生成器函数 (Generator)
 * ES6 引入的生成器函数，可以暂停和恢复执行
 * 使用 function* 声明，yield 关键字暂停执行
 */

// 基本生成器
(() => {
    function* generator() {
        yield 1;
        yield 2;
        yield 3;
    }
    
    let gen = generator();
    
    console.log(gen.next());  // { value: 1, done: false }
    console.log(gen.next());  // { value: 2, done: false }
    console.log(gen.next());  // { value: 3, done: false }
    console.log(gen.next());  // { value: undefined, done: true }
})();

// 使用 for...of 遍历生成器
(() => {
    function* colors() {
        yield 'red';
        yield 'green';
        yield 'blue';
    }
    
    for (let color of colors()) {
        console.log(color);
    }
})();

// 生成器接收参数
(() => {
    function* counter(start) {
        let count = start;
        while (true) {
            let reset = yield count++;
            if (reset) {
                count = start;
            }
        }
    }
    
    let gen = counter(1);
    console.log(gen.next().value);  // 1
    console.log(gen.next().value);  // 2
    console.log(gen.next().value);  // 3
    console.log(gen.next(true).value);  // 1 (重置)
})();

// 生成器的实际应用 - 无限序列
(() => {
    function* fibonacci() {
        let [prev, curr] = [0, 1];
        while (true) {
            yield curr;
            [prev, curr] = [curr, prev + curr];
        }
    }
    
    let fib = fibonacci();
    console.log(fib.next().value);  // 1
    console.log(fib.next().value);  // 1
    console.log(fib.next().value);  // 2
    console.log(fib.next().value);  // 3
    console.log(fib.next().value);  // 5
})();
