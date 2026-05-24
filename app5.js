/**
 * JavaScript 中的对象可以被看作是一个哈希表（键值对集合）
 * 对象中的属性（键）与属性值（值）之间存在映射关系，可以通过键来访问对应的值。
 */
let obj = {
    key1:"value1",
    key2:"value2"
}

/**
 * 创建
 */
(()=>{
    // 使用字面量语法或构造函数创建对象
    let obj1 = {};
    let obj2 = new Object();

    // 将键值对数组转换为对象
    // Object.fromEntries（ES2019新增）
    let obj3 = Object.fromEntries([['key1', 'value1'], ['key2', 'value2']]);
    console.log(obj3)
})();


/**
 * 插入和更新
 */
(()=>{
    let obj = {};

    // 使用点（.）表示法
    obj.key = "value";

    // 使用方括号（[]）表示法
    obj["key2"] = "value";
})();


/**
 * 通过键读取值
 */
(()=>{
    // 使用点（.）表示法
    console.log(obj.key);

    // 使用方括号（[]）表示法
    console.log(obj["key2"])
})();


/**
 * 删除
 */
(()=>{
    delete obj.key1;
})();


/**
 * 检测属性是否存在
 */
(()=>{
    // 使用 in 操作符
    // 返回true或false
    console.log("key" in obj);

    obj.key = "hello"

    // 使用 hasOwnProperty 方法
    // 返回true或false
    console.log(obj.hasOwnProperty("key"))
})();


/**
 * 获取对象的所有键
 * Object.keys 方法：返回一个包含对象所有可枚举属性的字符串数组。
 */
(()=>{
    Object.keys(obj);  // 返回 ["key1", "key2", ...]
})();


/**
 * 获取对象的所有键对应的值
 * Object.values 方法：返回一个包含对象所有可枚举属性值的数组。
 */
(()=>{
    Object.values(obj);  // 返回 [value1, value2, ...]
})();


/**
 * 获取对象所有的键值对
 * Object.entries 方法：返回一个包含对象所有可枚举属性键值对的二维数组。
 */
(()=>{
    Object.entries(obj);  // 返回 [["key1", value1], ["key2", value2], ...]
})();


/**
 * 遍历对象
 */
(()=>{
    // 使用 for...in 循环
    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            console.log(key, obj[key]);
        }
    }

    // 使用entries转成数组，再使用for...of 循环
    for (let [key, value] of Object.entries(obj)) {
        console.log(key,value)
    }
})();


/**
 * 合并对象
 */
(()=>{
    // 使用 Object.assign 方法
    let target = {};
    let source = { a: 1, b: 2 };
    Object.assign(target, source);

    // 使用扩展运算符（Spread Operator）
    let target1 = { ...source };
})();


(()=>{
    /**
     * 冻结对象
     * 防止修改现有属性或添加新属性
     */
    Object.freeze(obj);


    /**
     * 密封对象
     * 防止删除属性，但可以修改属性的值
     */
    Object.seal(obj);


})();


/**
 * 解冻
 * 一旦对象被冻结（frozen）或者被密封（sealed），默认情况下是不能直接解除的。
 * 这是因为这些操作旨在保护对象的属性状态，防止意外的修改或删除。不过，你可以通过一些技巧来间接实现一部分功能。
 */
(()=>{
    let obj = {
        prop1: 1,
        prop2: 'value'
    };

    Object.freeze(obj); // 冻结对象

    // 尝试修改冻结对象会失败
    obj.prop1 = 2; // 无效操作
    console.log(obj.prop1); // 输出 1，未被修改
    
    // 解除冻结的简便方法：创建一个新的对象，复制属性
    let unfrozenObj = { ...obj, prop1: 2 }; // 创建一个新对象，修改属性值
    console.log(unfrozenObj.prop1); // 输出 2
    
    // 或者使用 Object.assign
    let unfrozenObj2 = Object.assign({}, obj, { prop1: 2 });
    
    console.log(unfrozenObj2.prop1); // 输出 2
})();


/**
 * 定义属性
 * Object.defineProperty方法，可以定义一个新属性或修改现有属性的特性（attributes），如是否可枚举、是否可配置等。
 */
(()=>{
    Object.defineProperty(obj, 'key3', {
        value: 'value3',
        writable: true, // 是否可写，默认false
        enumerable: true, // 是否可枚举，默认false
        configurable: true // 是否可配置，默认false
    });
})();