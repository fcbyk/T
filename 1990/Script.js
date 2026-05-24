/**
 * 最初的脚本文件（1990年代中期）
 * 在JavaScript的最早阶段，模块化并没有明确的概念。开发者通常将所有的JavaScript代码写在一个文件中，这种方式导致了代码混乱、难以维护和重用。
 * 早期的JavaScript模块化实践通常是通过全局变量或对象来模拟模块化，但这种方式容易引发命名冲突和难以扩展的问题。
 */

// 定义一个全局对象
var utils = {
    getHelloFunction(){
        return ()=>console.log("hello worldL")
    }
}