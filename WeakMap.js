/**
 * JavaScript WeakMap 弱引用映射
 * WeakMap 的键必须是对象，且是弱引用（不影响垃圾回收）
 */

// WeakMap 基础操作
(()=>{
    // 创建 WeakMap
    let wm = new WeakMap();

    let obj1 = { id: 1 };
    let obj2 = { id: 2 };

    // set()：设置键值对（键必须是对象）
    wm.set(obj1, "数据1");
    wm.set(obj2, "数据2");

    console.log(wm.get(obj1)); // "数据1"
    console.log(wm.get(obj2)); // "数据2"

    // has()：检查键是否存在
    console.log(wm.has(obj1)); // true
    console.log(wm.has({ id: 3 })); // false（不同对象）

    // delete()：删除键值对
    wm.delete(obj1);
    console.log(wm.has(obj1)); // false

    // 注意：WeakMap 没有 clear()、size、keys、values、entries 等方法
    // 因为键是弱引用，无法保证遍历时的稳定性
})();

// WeakMap 与 Map 的区别
(()=>{
    /*
     * Map:
     * - 键可以是任意类型
     * - 可以遍历（有 size、keys、values、entries）
     * - 强引用，阻止垃圾回收
     * 
     * WeakMap:
     * - 键必须是对象
     * - 不能遍历（没有迭代方法）
     * - 弱引用，不阻止垃圾回收
     */

    // Map 示例
    let map = new Map();
    let keyObj = { id: 1 };
    map.set(keyObj, "value");
    console.log(map.size); // 1

    // WeakMap 示例
    let wm = new WeakMap();
    wm.set(keyObj, "value");
    // console.log(wm.size); // ❌ 错误：没有 size 属性

    // 当 keyObj 被设为 null 后
    keyObj = null;
    // Map 中的键值对仍然存在（内存泄漏风险）
    // WeakMap 中的键值对会被垃圾回收
})();

// 实际应用：私有数据存储
(()=>{
    // 使用 WeakMap 存储对象的私有数据
    let privateData = new WeakMap();

    class User {
        constructor(name, secret) {
            this.name = name;
            // 将敏感数据存储在 WeakMap 中
            privateData.set(this, { secret });
        }

        getSecret() {
            return privateData.get(this)?.secret;
        }

        getName() {
            return this.name;
        }
    }

    let user = new User("Alice", "password123");
    console.log(user.getName()); // "Alice"
    console.log(user.getSecret()); // "password123"
    
    // 外部无法直接访问 privateData
    // console.log(privateData.get(user)); // 需要访问 privateData 变量

    // 当 user 被销毁时，WeakMap 中的数据也会被清理
    user = null;
    // privateData 中对原 user 对象的引用也被清除
})();

// 实际应用：DOM 节点关联数据
(()=>{
    // 模拟 DOM 环境
    const mockElement = (id) => ({ id, tagName: "DIV" });

    let elementData = new WeakMap();

    function setData(element, data) {
        elementData.set(element, data);
    }

    function getData(element) {
        return elementData.get(element);
    }

    let div1 = mockElement("div1");
    let div2 = mockElement("div2");

    setData(div1, { color: "red", clicked: false });
    setData(div2, { color: "blue", clicked: true });

    console.log(getData(div1)); // {color: "red", clicked: false}
    console.log(getData(div2)); // {color: "blue", clicked: true}

    // 当 DOM 节点被移除时
    div1 = null;
    // WeakMap 中的数据会自动清理，避免内存泄漏
})();

// 实际应用：缓存计算结果
(()=>{
    let cache = new WeakMap();

    function expensiveCalculation(obj) {
        // 检查缓存
        if (cache.has(obj)) {
            console.log("从缓存获取");
            return cache.get(obj);
        }

        // 模拟耗时计算
        console.log("执行计算...");
        let result = obj.value * 2;

        // 缓存结果
        cache.set(obj, result);
        return result;
    }

    let obj = { value: 10 };
    console.log(expensiveCalculation(obj)); // 执行计算... 20
    console.log(expensiveCalculation(obj)); // 从缓存获取 20

    // 当 obj 被销毁时，缓存自动清理
    obj = null;
})();

// 实际应用：标记已处理对象
(()=>{
    let processed = new WeakMap();

    function processObject(obj) {
        // 防止重复处理
        if (processed.has(obj)) {
            console.log("已处理，跳过");
            return;
        }

        console.log("处理对象:", obj);
        processed.set(obj, true);
    }

    let obj1 = { id: 1 };
    let obj2 = { id: 2 };

    processObject(obj1); // 处理对象: {id: 1}
    processObject(obj1); // 已处理，跳过
    processObject(obj2); // 处理对象: {id: 2}

    // 当对象被销毁后，标记也会自动清除
    obj1 = null;
})();

// WeakMap 的限制与注意事项
(()=>{
    /*
     * 限制：
     * 1. 键必须是对象（不能使用原始值）
     * 2. 不能遍历（没有迭代方法）
     * 3. 不能获取大小（没有 size 属性）
     * 4. 不能清空（没有 clear 方法）
     * 
     * 适用场景：
     * 1. 存储对象的私有/元数据
     * 2. DOM 节点关联数据
     * 3. 缓存对象相关的计算结果
     * 4. 标记对象状态（避免内存泄漏）
     * 
     * 不适用场景：
     * 1. 需要遍历所有键值对
     * 2. 需要知道集合大小
     * 3. 键是原始值（字符串、数字等）
     */

    // 错误示例：键不能是原始值
    try {
        let wm = new WeakMap();
        wm.set("key", "value"); // ❌ TypeError
    } catch (e) {
        console.log("错误:", e.message);
    }

    // 正确示例：使用 Map 存储原始值键
    let map = new Map();
    map.set("key", "value"); // ✅ 正常
    console.log(map.get("key")); // "value"
})();

// WeakMap 与垃圾回收演示
(()=>{
    /*
     * 弱引用的核心优势：
     * 当键对象没有其他引用时，会被垃圾回收，
     * WeakMap 中对应的键值对也会被自动清除。
     * 
     * 这避免了内存泄漏，特别适合：
     * - 临时数据存储
     * - 对象生命周期管理
     * - 缓存系统
     */

    let wm = new WeakMap();

    // 创建对象并存储到 WeakMap
    let tempObj = { data: "temporary" };
    wm.set(tempObj, "cached value");

    console.log(wm.has(tempObj)); // true

    // 移除最后一个引用
    tempObj = null;

    // 此时，WeakMap 中的条目可以被垃圾回收
    // （实际回收时机由 JavaScript 引擎决定）
    console.log("对象引用已移除，等待垃圾回收...");
})();
