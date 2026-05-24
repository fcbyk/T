/**
 * Map 是 ES6 提供的键值对集合
 *
 * 和 Object 的区别：
 * - key 可以是任意类型（不仅限字符串）
 * - 没有原型污染
 * - 保证插入顺序
 */

/**
 * 创建 Map
 */
(()=>{
    // 使用构造函数
    const map1 = new Map();

    // 使用二维数组初始化
    const map2 = new Map([
        ['key1', 'value1'],
        ['key2', 'value2']
    ]);

    console.log(map2);
})();


/**
 * 插入 / 更新
 */
(()=>{
    const map = new Map();

    // set(key, value)
    map.set('key1', 'value1');
    map.set('key2', 'value2');

    // key 可以是任意类型
    const objKey = { id: 1 };
    map.set(objKey, '对象作为 key');

    // 更新（key 相同会覆盖）
    map.set('key1', 'newValue');

    console.log(map);
})();


/**
 * 读取
 */
(()=>{
    const map = new Map([
        ['key1', 'value1']
    ]);

    console.log(map.get('key1')); // value1
    console.log(map.get('notExist')); // undefined
})();


/**
 * 删除
 */
(()=>{
    const map = new Map([
        ['key1', 'value1']
    ]);

    map.delete('key1'); // 删除指定 key

    // 清空
    map.clear();

    console.log(map);
})();


/**
 * 判断是否存在
 */
(()=>{
    const map = new Map();

    map.set('key', 'value');

    console.log(map.has('key')); // true
})();


/**
 * 获取大小（对比 Object 很重要）
 */
(()=>{
    const map = new Map([
        ['a', 1],
        ['b', 2]
    ]);

    console.log(map.size); // 2
})();


/**
 * 获取 keys / values / entries
 */
(()=>{
    const map = new Map([
        ['a', 1],
        ['b', 2]
    ]);

    console.log(map.keys());    // MapIterator
    console.log(map.values());  // MapIterator
    console.log(map.entries()); // MapIterator
})();


/**
 * 遍历（Map 的强项）
 */
(()=>{
    const map = new Map([
        ['a', 1],
        ['b', 2]
    ]);

    // 1. for...of（推荐）
    for (const [key, value] of map) {
        console.log(key, value);
    }

    // 2. forEach
    map.forEach((value, key) => {
        console.log(key, value);
    });
})();


/**
 * Map 转 Object
 */
(()=>{
    const map = new Map([
        ['a', 1],
        ['b', 2]
    ]);

    const obj = Object.fromEntries(map);
    console.log(obj); // { a: 1, b: 2 }
})();


/**
 * Object 转 Map
 */
(()=>{
    const obj = {
        a: 1,
        b: 2
    };

    const map = new Map(Object.entries(obj));
    console.log(map);
})();


/**
 * 注意点（对比 Object）
 */
(()=>{
    const map = new Map();

    // key 是对象（不会被转成字符串）
    const key1 = {};
    const key2 = {};

    map.set(key1, 'value1');
    map.set(key2, 'value2');

    console.log(map.get(key1)); // value1
    console.log(map.get(key2)); // value2

    // Object 做不到这一点
})();