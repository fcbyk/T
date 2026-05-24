/**
 * JavaScript 的作用域链（Scope Chain）是指在函数嵌套结构中，每个执行上下文的变量对象（VO）及其对应的外部环境的集合。
 * 作用域链的形成是由 JavaScript 的词法作用域规则所决定的，即变量的作用域是在代码书写阶段就已经确定的，而不是在运行时确定的。
 */

/**
 * 在 JavaScript 中，变量查找遵循作用域链的规则。当代码在某个作用域中访问一个变量时，JavaScript 引擎会按照以下顺序查找变量：
 * 当前作用域：首先查找当前函数内部的变量，如果找到则直接使用。
 * 外部作用域：如果在当前作用域中找不到该变量，则继续向外部作用域（词法上的外部）查找，直到找到该变量或者抵达全局作用域为止。
 * 这意味着，如果当前作用域中已经定义了一个变量，JavaScript 引擎会优先使用当前作用域中的变量，而不是向外部作用域查找同名变量。这就是所谓的“就近原则”。
 */

// 作用域链：作用域8 -> 作用域7 -> 作用域6 -> 作用域5 -> 作用域4 -> 作用域3 -> 作用域2 -> 作用域1 -> 作用域0

function chain(){

    let msg = "作用域-1 msg";

    (()=>{

        // 作用域0
        let hello = "作用域0 hello";
        console.log(hello);  // 输出：作用域0 hello
    
        function first(){
            // 作用域1
            function second(){
                // 作用域2
                function third(){
                    let number = 123456789;  // 作用域3
                    function fourth(){
                        // 作用域4
                        console.log(hello);  // 输出：作用域0 hello
                        
                        function fifth(){
                            // 作用域5
                            let hello = "作用域5 hello";
                            console.log(msg);
                            
                            function sixth(){
                                // 作用域6
                                function seventh(){
                                    // 作用域7
                                    function eighth(){
                                        // 作用域8
                                        console.log(hello);  // 输出：作用域5 hello
                                    }
                                    eighth();  // 调用作用域8中的函数
                                }
                                seventh();  // 调用作用域7中的函数
                            }
                            sixth();  // 调用作用域6中的函数
                        }
                        fifth();  // 调用作用域5中的函数
                    }
                    fourth();  // 调用作用域4中的函数
                }
                third();  // 调用作用域3中的函数
            }
            second();  // 调用作用域2中的函数
        }
        first();  // 调用作用域1中的函数
    
    })();

}