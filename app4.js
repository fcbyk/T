/**
 * 静态属性与方法
 * JavaScript 中的静态属性和方法指的是添加到构造函数本身的属性和方法
 * 这些静态属性和方法可以通过构造函数本身直接访问，而不需要先创建实例对象
 * 静态属性和方法属于构造函数本身，与实例对象无关。这意味着它们不会被实例继承，也不能通过实例访问
 */
(() => {
    function MyClass() {}

    MyClass.staticProperty = 'static value';
    MyClass.staticMethod = function() {
        return 'Hello, this is a static method';
    };
    
    console.log(MyClass.staticMethod());
    console.log(MyClass.staticProperty);
})();
