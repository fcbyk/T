/**
 * 缓存机制
 * 当模块第一次被加载时，它的内容会被执行一次，并且模块会被缓存到 require.cache 中。
 * 后续对相同模块的 require 调用会直接从缓存中获取。
 */
// a.js
console.log('Module a is loaded');
module.exports = 'This is module a';

// b.js
const a = require('./a');
console.log(a);  // 输出: "This is module a"

// 再次 require('./a') 时不会再次输出 'Module a is loaded'
const b = require('./a');