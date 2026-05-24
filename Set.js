/**
 * JavaScript Set 集合数据结构
 * Set 是一种唯一值的集合，不允许重复
 */

// Set 基础操作
(()=>{
    // 创建 Set
    let set = new Set();

    // add()：添加元素
    set.add("Apple");
    set.add("Banana");
    set.add("Orange");
    set.add("Apple"); // 重复值会被忽略

    console.log(set); // Set(3) {"Apple", "Banana", "Orange"}
    console.log(set.size); // 3

    // has()：检查元素是否存在
    console.log(set.has("Apple")); // true
    console.log(set.has("Grape")); // false

    // delete()：删除元素
    set.delete("Banana");
    console.log(set.has("Banana")); // false

    // clear()：清空集合
    set.clear();
    console.log(set.size); // 0
})();

// Set 初始化
(()=>{
    // 从数组初始化（自动去重）
    let arr = [1, 2, 2, 3, 3, 4];
    let set = new Set(arr);
    console.log(set); // Set(4) {1, 2, 3, 4}

    // 从字符串初始化
    let strSet = new Set("hello");
    console.log(strSet); // Set(4) {"h", "e", "l", "o"}

    // 从其他 Set 克隆
    let set2 = new Set(set);
    console.log(set2.size); // 4
})();

// Set 遍历
(()=>{
    let set = new Set(["Apple", "Banana", "Orange"]);

    // forEach()
    set.forEach((value) => {
        console.log(value);
    });

    // for...of 遍历
    for (let item of set) {
        console.log(item);
    }

    // values() / keys()（Set 中两者相同）
    for (let value of set.values()) {
        console.log(value);
    }

    // entries() 返回 [value, value]
    for (let entry of set.entries()) {
        console.log(entry); // ["Apple", "Apple"], ["Banana", "Banana"], ...
    }
})();

// Set 转换
(()=>{
    let set = new Set([1, 2, 3, 4]);

    // Set → Array
    let arr1 = [...set];
    console.log(arr1); // [1, 2, 3, 4]

    let arr2 = Array.from(set);
    console.log(arr2); // [1, 2, 3, 4]

    // Array → Set（去重）
    let dupArr = [1, 2, 2, 3, 3, 4];
    let uniqueSet = new Set(dupArr);
    let uniqueArr = [...uniqueSet];
    console.log(uniqueArr); // [1, 2, 3, 4]

    // Set → String
    let str = [...set].join(", ");
    console.log(str); // "1, 2, 3, 4"
})();

// 数组去重实用函数
(()=>{
    function unique(arr) {
        return [...new Set(arr)];
    }

    console.log(unique([1, 2, 2, 3, 3, 4])); // [1, 2, 3, 4]
    console.log(unique(["a", "b", "a", "c"])); // ["a", "b", "c"]
})();

// Set 集合运算
(()=>{
    let setA = new Set([1, 2, 3, 4]);
    let setB = new Set([3, 4, 5, 6]);

    // 并集（Union）
    let union = new Set([...setA, ...setB]);
    console.log(union); // Set(6) {1, 2, 3, 4, 5, 6}

    // 交集（Intersection）
    let intersection = new Set(
        [...setA].filter(x => setB.has(x))
    );
    console.log(intersection); // Set(2) {3, 4}

    // 差集（Difference）
    let difference = new Set(
        [...setA].filter(x => !setB.has(x))
    );
    console.log(difference); // Set(2) {1, 2}

    // 对称差集（Symmetric Difference）
    let symmetricDiff = new Set(
        [...setA].filter(x => !setB.has(x))
        .concat([...setB].filter(x => !setA.has(x)))
    );
    console.log(symmetricDiff); // Set(4) {1, 2, 5, 6}
})();

// 子集与超集判断
(()=>{
    function isSubset(subset, superset) {
        return [...subset].every(elem => superset.has(elem));
    }

    function isSuperset(superset, subset) {
        return isSubset(subset, superset);
    }

    let setA = new Set([1, 2]);
    let setB = new Set([1, 2, 3, 4]);

    console.log(isSubset(setA, setB)); // true
    console.log(isSuperset(setB, setA)); // true
    console.log(isSubset(setB, setA)); // false
})();

// 实际应用示例
(()=>{
    // 1. 查找数组中的唯一值
    let tags = ["js", "css", "html", "js", "css"];
    let uniqueTags = [...new Set(tags)];
    console.log(uniqueTags); // ["js", "css", "html"]

    // 2. 快速查找
    let users = new Set(["alice", "bob", "charlie"]);
    console.log(users.has("bob")); // true（O(1) 时间复杂度）

    // 3. 过滤重复对象（基于某个属性）
    let products = [
        { id: 1, name: "Laptop" },
        { id: 2, name: "Phone" },
        { id: 1, name: "Laptop" } // 重复
    ];

    let seen = new Set();
    let uniqueProducts = products.filter(product => {
        if (seen.has(product.id)) {
            return false;
        }
        seen.add(product.id);
        return true;
    });
    console.log(uniqueProducts);
    // [{id: 1, name: "Laptop"}, {id: 2, name: "Phone"}]
})();

// WeakSet（弱引用 Set）
(()=>{
    // WeakSet 的元素必须是对象，且是弱引用
    let ws = new WeakSet();
    
    let obj1 = { id: 1 };
    let obj2 = { id: 2 };

    ws.add(obj1);
    ws.add(obj2);

    console.log(ws.has(obj1)); // true
    console.log(ws.has(obj2)); // true

    // 删除引用后，对象会被垃圾回收
    obj1 = null;
    // ws 中对 obj1 的引用也会被清除

    // WeakSet 不能遍历，没有 size、forEach、keys、values 等方法
    // 适用场景：标记对象、防止重复处理等

    // 示例：标记已处理的 DOM 节点
    let processed = new WeakSet();

    function processNode(node) {
        if (processed.has(node)) {
            return; // 已处理，跳过
        }
        
        // 处理节点...
        console.log("Processing node:", node);
        processed.add(node);
    }

    let div1 = document.createElement("div");
    let div2 = document.createElement("div");

    processNode(div1); // Processing node: <div>
    processNode(div1); // 不会再次处理
    processNode(div2); // Processing node: <div>
})();
