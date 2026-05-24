/**
 * JavaScript Map 映射数据结构
 * Map 是一种键值对集合，键可以是任意类型
 */

// Map 基础操作
(()=>{
    // 创建 Map
    let map = new Map();

    // set()：设置键值对
    map.set("name", "Alice");
    map.set("age", 25);
    map.set(true, "布尔键");
    map.set({ id: 1 }, "对象键");

    console.log(map);
    // Map(4) {"name" => "Alice", "age" => 25, true => "布尔键", {…} => "对象键"}

    // get()：获取值
    console.log(map.get("name")); // "Alice"
    console.log(map.get(true)); // "布尔键"

    // has()：检查键是否存在
    console.log(map.has("name")); // true
    console.log(map.has("email")); // false

    // delete()：删除键值对
    map.delete("age");
    console.log(map.has("age")); // false

    // clear()：清空所有
    map.clear();
    console.log(map.size); // 0
})();

// Map 初始化
(()=>{
    // 从二维数组初始化
    let map1 = new Map([
        ["name", "Alice"],
        ["age", 25],
        ["city", "Beijing"]
    ]);
    console.log(map1.get("name")); // "Alice"

    // 从其他 Map 克隆
    let map2 = new Map(map1);
    console.log(map2.get("age")); // 25

    // 使用对象创建 Map
    let obj = { name: "Bob", age: 30 };
    let map3 = new Map(Object.entries(obj));
    console.log(map3.get("name")); // "Bob"
})();

// Map 遍历
(()=>{
    let map = new Map([
        ["name", "Alice"],
        ["age", 25],
        ["city", "Beijing"]
    ]);

    // forEach()
    map.forEach((value, key) => {
        console.log(`${key}: ${value}`);
    });

    // for...of 遍历 entries
    for (let [key, value] of map.entries()) {
        console.log(`${key}: ${value}`);
    }

    // 直接遍历（默认就是 entries）
    for (let [key, value] of map) {
        console.log(`${key}: ${value}`);
    }

    // 只遍历键
    for (let key of map.keys()) {
        console.log(key);
    }

    // 只遍历值
    for (let value of map.values()) {
        console.log(value);
    }
})();

// Map 与 Object 对比
(()=>{
    // Map 的优势：
    // 1. 键可以是任意类型
    let map = new Map();
    map.set({}, "对象键");
    map.set(function() {}, "函数键");
    map.set(NaN, "NaN键");
    console.log(map.get(NaN)); // "NaN键"

    // 2. 保持插入顺序
    let orderedMap = new Map();
    orderedMap.set("first", 1);
    orderedMap.set("second", 2);
    orderedMap.set("third", 3);
    console.log([...orderedMap.keys()]); // ["first", "second", "third"]

    // 3. 性能更好（频繁增删场景）
    // 4. 有 size 属性，Object 需要手动计算

    // Object 的优势：
    // 1. JSON 支持
    // 2. 解构赋值
    // 3. 点表示法访问更简洁
})();

// Map 转换
(()=>{
    let map = new Map([
        ["name", "Alice"],
        ["age", 25]
    ]);

    // Map → Object
    let obj = Object.fromEntries(map);
    console.log(obj); // {name: "Alice", age: 25}

    // Map → Array
    let arr = [...map];
    console.log(arr); // [["name", "Alice"], ["age", 25]]

    // Array → Map
    let newArr = [["x", 1], ["y", 2]];
    let newMap = new Map(newArr);
    console.log(newMap.get("x")); // 1

    // Map → JSON
    let json = JSON.stringify([...map]);
    console.log(json); // '[["name","Alice"],["age",25]]'

    // JSON → Map
    let parsed = new Map(JSON.parse(json));
    console.log(parsed.get("name")); // "Alice"
})();

// 实际应用示例
(()=>{
    // 缓存系统
    class Cache {
        constructor(maxSize = 100) {
            this.cache = new Map();
            this.maxSize = maxSize;
        }

        get(key) {
            if (!this.cache.has(key)) return undefined;
            
            // 移到末尾（LRU 策略）
            const value = this.cache.get(key);
            this.cache.delete(key);
            this.cache.set(key, value);
            return value;
        }

        set(key, value) {
            if (this.cache.has(key)) {
                this.cache.delete(key);
            } else if (this.cache.size >= this.maxSize) {
                // 删除最旧的
                const oldestKey = this.cache.keys().next().value;
                this.cache.delete(oldestKey);
            }
            this.cache.set(key, value);
        }

        clear() {
            this.cache.clear();
        }
    }

    let cache = new Cache(3);
    cache.set("a", 1);
    cache.set("b", 2);
    cache.set("c", 3);
    cache.set("d", 4); // 超过限制，删除 "a"
    
    console.log(cache.get("a")); // undefined
    console.log(cache.get("b")); // 2
})();

// WeakMap（弱引用 Map）
(()=>{
    // WeakMap 的键必须是对象，且是弱引用
    let wm = new WeakMap();
    
    let obj1 = { id: 1 };
    let obj2 = { id: 2 };

    wm.set(obj1, "数据1");
    wm.set(obj2, "数据2");

    console.log(wm.get(obj1)); // "数据1"
    console.log(wm.has(obj2)); // true

    // 当对象没有引用时，会被垃圾回收
    obj1 = null;
    // wm 中对 obj1 的引用也会被清除（不可见）

    // WeakMap 不能遍历，没有 size、keys、values、entries 方法
    // 适用场景：私有数据、DOM 节点关联数据等
})();
