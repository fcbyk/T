/**
 * JavaScript 对象中的内部属性可以分为可见和不可见两类。
 * 这些内部属性在对象的操作和行为中起着重要作用，但大部分不直接暴露给开发者，而是通过标准的 JavaScript API 间接访问或影响。
 * 这些内部属性不是标准的 JavaScript 语言特性，而是由 JavaScript 引擎实现和维护的。
 * 了解这些内部属性可以帮助理解 JavaScript 对象的工作原理，并且在特定情况下，可以通过使用标准的 API 来操作和影响对象的行为。
 */

/**
 * 可见的内部属性
 * 
 * [[Prototype]]
 * 每个 JavaScript 对象都有一个 [[Prototype]] 内部属性，指向其原型对象。通过 __proto__ 属性（非标准）或者 Object.getPrototypeOf() 方法可以访问这个属性。
 * 在 ECMAScript 6 中，可以使用 Object.setPrototypeOf() 方法修改对象的原型链。
 * 
 * [[Class]]：
 * [[Class]] 内部属性表示对象的类型信息。可以通过 Object.prototype.toString.call(obj) 来获取一个对象的类型，返回一个类似 "[object Array]" 的字符串，这里的 "Array" 就是对象的 [[Class]] 属性。
 * 
 * [[Extensible]]：
 * [[Extensible]] 内部属性标志着对象是否可以被扩展（添加新属性）。当一个对象被创建时，默认是可扩展的。
 * 以使用 Object.preventExtensions()、Object.seal() 或 Object.freeze() 来改变对象的可扩展性。
 */

/**
 * 不可见的内部属性
 * [[Get]] 和 [[Set]]：
 * 每个属性在对象上都有对应的 [[Get]] 和 [[Set]] 内部方法，用于获取和设置属性的值。这些方法定义了属性的行为，包括如何读取和写入属性的值，以及如何处理属性的特性。
 * 
 * [[Value]]、[[Writable]]、[[Enumerable]] 和 [[Configurable]]：
 * 这些内部属性用于定义对象属性的特性。[[Value]] 表示属性的值，[[Writable]] 表示属性是否可以被修改，[[Enumerable]] 表示属性是否可枚举，[[Configurable]] 表示属性是否可以被删除或者其他特性是否可以被修改。可以通过 Object.defineProperty() 或者 Object.defineProperties() 方法来定义或修改属性的这些特性。
 * 
 * [[Call]] 和 [[Construct]]：
 * 对于函数对象，有 [[Call]] 和 [[Construct]] 内部方法。[[Call]] 用于实现函数调用操作，[[Construct]] 用于实现构造函数调用时的行为（使用 new 关键字）。
 */

/**
 * 其他不可见的内部属性
 * JavaScript 引擎可能还会定义其他不可见的内部属性来支持对象的特定行为，比如函数对象的 [[Scope]] 用于表示函数的作用域链。
 */