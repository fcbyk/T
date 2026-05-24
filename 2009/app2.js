/**
 * exports
 * exports 是 module.exports 的快捷引用。它们实际上指向同一个对象
 */

// 这相当于往上面的空对象添加了方法
exports.add = function(a, b) {
    return a + b;
};

exports.subtract = function(a, b) {
    return a - b;
};

// 错误做法，这种做法使exports引用地址改变了
// 下面的对象不会导出
exports = {
    add: function(a, b) { return a + b; }
};