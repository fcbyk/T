/**
 * IIFE（立即调用的函数表达式）（1999年及以后）
 * 背景： 为了解决全局命名空间污染的问题，开发者开始使用立即调用的函数表达式（IIFE）。
 * 通过这种方式，JavaScript代码能够在一个自包含的作用域中运行，从而避免了变量污染全局命名空间。
 * IIFE是一种自我封装的方式，可以使得代码模块化，但它并没有引入像import和export这样的语法，也没有真正的模块系统。
 */

(function() {
    // privateVar 和 privateFunction 被封装在 IIFE 内部
    var privateVar = 'I am private';
    function privateFunction() {
      console.log('Private function');
    }
  
    // myModule 被暴露到全局作用域，提供公共方法 publicMethod
    window.myModule = {
      publicMethod: function() {
        console.log('Public method');
      },
      getPrivateVar: function() {
        return privateVar;
      }
    };
})();