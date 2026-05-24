/**
 * 在 JavaScript 中，有一些非标准的方法和属性，它们可能在一些旧版本的 JavaScript 引擎中被支持，但不建议在生产环境中使用，因为它们可能会导致代码不够可移植或不稳定。
 * 
 * __proto__ 属性
 * __proto__ 属性用于访问和设置对象的原型链。在 ECMAScript 6 标准中，它被定义为非推荐的属性。推荐使用 Object.getPrototypeOf() 和 Object.setPrototypeOf() 方法来操作对象的原型链。
 * 
 * __defineGetter__ 和 __defineSetter__ 方法
 * 这两个方法可以用于定义对象的 getter 和 setter。例如，obj.__defineGetter__('prop', getterFunction) 可以用来定义一个属性的 getter 方法。推荐使用 Object.defineProperty() 方法来定义 getter 和 setter。
 * 
 * __lookupGetter__ 和 __lookupSetter__ 方法
 * 两个方法可以用于获取对象的 getter 和 setter 方法。例如，obj.__lookupGetter__('prop') 可以获取属性 'prop' 的 getter 方法。推荐使用 Object.getOwnPropertyDescriptor() 方法来获取属性的描述符对象。
 * 
 * __count__ 属性
 * 在某些 JavaScript 引擎中，可以通过 obj.__count__ 获取对象的属性数量。这不是标准的方法，应该避免使用。
 * 
 * __iterator__ 方法
 * 这个方法用于定义对象的迭代器。在 ECMAScript 6 后，推荐使用符号 Symbol.iterator 来定义对象的迭代器方法，以保持标准的兼容性和可移植性。
 * 
 * 这些非标准的方法和属性可能在特定的环境中工作，但为了确保代码的可移植性和未来的兼容性，推荐使用标准的 ECMAScript 方法和属性。
 */