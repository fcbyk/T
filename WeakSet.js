/**
 * JavaScript WeakSet 弱引用集合
 * WeakSet 的元素必须是对象，且是弱引用（不影响垃圾回收）
 */

// WeakSet 基础操作
(()=>{
    // 创建 WeakSet
    let ws = new WeakSet();

    let obj1 = { id: 1 };
    let obj2 = { id: 2 };

    // add()：添加元素（必须是对象）
    ws.add(obj1);
    ws.add(obj2);

    console.log(ws.has(obj1)); // true
    console.log(ws.has(obj2)); // true

    // has()：检查元素是否存在
    console.log(ws.has({ id: 3 })); // false（不同对象）

    // delete()：删除元素
    ws.delete(obj1);
    console.log(ws.has(obj1)); // false

    // 注意：WeakSet 没有 clear()、size、forEach、keys、values、entries 等方法
    // 因为元素是弱引用，无法保证遍历时的稳定性
})();

// WeakSet 与 Set 的区别
(()=>{
    /*
     * Set:
     * - 元素可以是任意类型
     * - 可以遍历（有 size、forEach、keys、values、entries）
     * - 强引用，阻止垃圾回收
     * 
     * WeakSet:
     * - 元素必须是对象
     * - 不能遍历（没有迭代方法）
     * - 弱引用，不阻止垃圾回收
     */

    // Set 示例
    let set = new Set();
    let obj = { id: 1 };
    set.add(obj);
    console.log(set.size); // 1

    // WeakSet 示例
    let ws = new WeakSet();
    ws.add(obj);
    // console.log(ws.size); // ❌ 错误：没有 size 属性

    // 当 obj 被设为 null 后
    obj = null;
    // Set 中的元素仍然存在（内存泄漏风险）
    // WeakSet 中的元素会被垃圾回收
})();

// 实际应用：标记对象状态
(()=>{
    let visited = new WeakSet();

    function markVisited(obj) {
        visited.add(obj);
    }

    function isVisited(obj) {
        return visited.has(obj);
    }

    let node1 = { id: 1, name: "Node1" };
    let node2 = { id: 2, name: "Node2" };

    markVisited(node1);
    console.log(isVisited(node1)); // true
    console.log(isVisited(node2)); // false

    markVisited(node2);
    console.log(isVisited(node2)); // true

    // 当对象被销毁时，标记自动清除
    node1 = null;
    // visited 中对 node1 的引用也被清除
})();

// 实际应用：防止循环引用
(()=>{
    let seen = new WeakSet();

    function deepClone(obj) {
        // 检查是否已处理过（防止循环引用）
        if (seen.has(obj)) {
            return obj; // 返回原引用
        }

        // 标记为已处理
        seen.add(obj);

        // 克隆逻辑
        if (typeof obj !== "object" || obj === null) {
            return obj;
        }

        let clone = Array.isArray(obj) ? [] : {};
        for (let key in obj) {
            if (obj.hasOwnProperty(key)) {
                clone[key] = deepClone(obj[key]);
            }
        }

        return clone;
    }

    // 测试循环引用
    let original = { a: 1, b: { c: 2 } };
    original.b.d = original; // 循环引用

    let cloned = deepClone(original);
    console.log(cloned.a); // 1
    console.log(cloned.b.c); // 2
    console.log(cloned.b.d === cloned); // true（循环引用保持）
})();

// 实际应用：DOM 节点管理
(()=>{
    // 模拟 DOM 环境
    const mockElement = (id) => ({ id, tagName: "DIV" });

    let activeElements = new WeakSet();

    function activateElement(element) {
        activeElements.add(element);
        console.log(`激活元素: ${element.id}`);
    }

    function deactivateElement(element) {
        activeElements.delete(element);
        console.log(`停用元素: ${element.id}`);
    }

    function isActive(element) {
        return activeElements.has(element);
    }

    let div1 = mockElement("div1");
    let div2 = mockElement("div2");

    activateElement(div1);
    activateElement(div2);

    console.log(isActive(div1)); // true
    console.log(isActive(div2)); // true

    deactivateElement(div1);
    console.log(isActive(div1)); // false

    // 当 DOM 节点被移除时
    div2 = null;
    // WeakSet 中的引用会自动清理
})();

// 实际应用：事件处理器管理
(()=>{
    let registeredHandlers = new WeakSet();

    function registerHandler(obj, handler) {
        if (registeredHandlers.has(obj)) {
            console.log("处理器已注册");
            return;
        }

        console.log("注册处理器");
        registeredHandlers.add(obj);
        
        // 模拟注册事件
        obj.handler = handler;
    }

    function unregisterHandler(obj) {
        if (registeredHandlers.has(obj)) {
            console.log("注销处理器");
            registeredHandlers.delete(obj);
            delete obj.handler;
        }
    }

    let button = { id: "btn1" };
    let handler = () => console.log("Clicked!");

    registerHandler(button, handler); // 注册处理器
    registerHandler(button, handler); // 处理器已注册
    
    unregisterHandler(button); // 注销处理器

    // 当 button 被销毁时
    button = null;
    // WeakSet 中的引用自动清理
})();

// 实际应用：对象池模式
(()=>{
    let available = new WeakSet();
    let inUse = new WeakSet();

    class ObjectPool {
        constructor(createFn) {
            this.createFn = createFn;
        }

        acquire() {
            // 简化示例：实际应维护对象池
            let obj = this.createFn();
            inUse.add(obj);
            return obj;
        }

        release(obj) {
            if (inUse.has(obj)) {
                inUse.delete(obj);
                available.add(obj);
            }
        }

        isInUse(obj) {
            return inUse.has(obj);
        }
    }

    let pool = new ObjectPool(() => ({ data: Math.random() }));
    
    let obj1 = pool.acquire();
    let obj2 = pool.acquire();

    console.log(pool.isInUse(obj1)); // true
    console.log(pool.isInUse(obj2)); // true

    pool.release(obj1);
    console.log(pool.isInUse(obj1)); // false

    // 当对象被销毁时
    obj2 = null;
    // inUse 和 available 中的引用都会自动清理
})();

// WeakSet 的限制与注意事项
(()=>{
    /*
     * 限制：
     * 1. 元素必须是对象（不能使用原始值）
     * 2. 不能遍历（没有迭代方法）
     * 3. 不能获取大小（没有 size 属性）
     * 4. 不能清空（没有 clear 方法）
     * 
     * 适用场景：
     * 1. 标记对象状态（已访问、已处理等）
     * 2. 防止重复处理对象
     * 3. 检测循环引用
     * 4. DOM 节点状态管理
     * 
     * 不适用场景：
     * 1. 需要遍历所有元素
     * 2. 需要知道集合大小
     * 3. 元素是原始值（字符串、数字等）
     */

    // 错误示例：元素不能是原始值
    try {
        let ws = new WeakSet();
        ws.add("string"); // ❌ TypeError
    } catch (e) {
        console.log("错误:", e.message);
    }

    // 正确示例：使用 Set 存储原始值
    let set = new Set();
    set.add("string"); // ✅ 正常
    console.log(set.has("string")); // true
})();

// WeakSet 与垃圾回收演示
(()=>{
    /*
     * 弱引用的核心优势：
     * 当对象没有其他引用时，会被垃圾回收，
     * WeakSet 中对应的元素也会被自动清除。
     * 
     * 这避免了内存泄漏，特别适合：
     * - 临时标记
     * - 对象生命周期管理
     * - 状态跟踪
     */

    let ws = new WeakSet();

    // 创建对象并添加到 WeakSet
    let tempObj = { data: "temporary" };
    ws.add(tempObj);

    console.log(ws.has(tempObj)); // true

    // 移除最后一个引用
    tempObj = null;

    // 此时，WeakSet 中的元素可以被垃圾回收
    // （实际回收时机由 JavaScript 引擎决定）
    console.log("对象引用已移除，等待垃圾回收...");
})();

// 综合示例：图遍历算法
(()=>{
    let visited = new WeakSet();

    // 简单的图结构
    let graph = {
        A: { value: 1, neighbors: [] },
        B: { value: 2, neighbors: [] },
        C: { value: 3, neighbors: [] }
    };

    graph.A.neighbors = [graph.B, graph.C];
    graph.B.neighbors = [graph.C];

    function traverse(node) {
        if (!node || visited.has(node)) {
            return;
        }

        visited.add(node);
        console.log(`访问节点: ${node.value}`);

        // 递归访问邻居
        node.neighbors.forEach(neighbor => {
            traverse(neighbor);
        });
    }

    traverse(graph.A);
    // 访问节点: 1
    // 访问节点: 2
    // 访问节点: 3

    // 遍历完成后，visited 中的标记会在节点被销毁时自动清理
    graph = null;
})();
