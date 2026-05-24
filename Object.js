/**
 * JavaScript Object 对象常用操作
 */

// 对象创建
(()=>{
    // 字面量方式（推荐）
    let person = {
        name: "Alice",
        age: 25,
        greet() {
            return `Hello, I'm ${this.name}`;
        }
    };
    console.log(person.greet()); // "Hello, I'm Alice"

    // 构造函数方式
    let obj1 = new Object();
    obj1.name = "Bob";
    console.log(obj1); // {name: "Bob"}

    // Object.create()：基于原型创建
    let proto = { type: "human" };
    let obj2 = Object.create(proto);
    obj2.name = "Charlie";
    console.log(obj2.name); // "Charlie"
    console.log(obj2.type); // "human"（继承自原型）
})();

// 属性访问与修改
(()=>{
    let user = {
        name: "Alice",
        age: 25,
        address: {
            city: "Beijing",
            zip: "100000"
        }
    };

    // 点表示法
    console.log(user.name); // "Alice"
    user.age = 26;
    console.log(user.age); // 26

    // 方括号表示法（支持动态键名）
    let key = "name";
    console.log(user[key]); // "Alice"
    user["email"] = "alice@example.com";
    console.log(user.email); // "alice@example.com"

    // 嵌套对象访问
    console.log(user.address.city); // "Beijing"
})();

// 对象遍历
(()=>{
    let user = {
        name: "Alice",
        age: 25,
        email: "alice@example.com"
    };

    // for...in：遍历可枚举属性（包括原型链）
    for (let key in user) {
        console.log(`${key}: ${user[key]}`);
    }

    // Object.keys()：获取所有键
    console.log(Object.keys(user)); // ["name", "age", "email"]

    // Object.values()：获取所有值（ES2017）
    console.log(Object.values(user)); // ["Alice", 25, "alice@example.com"]

    // Object.entries()：获取键值对（ES2017）
    console.log(Object.entries(user));
    // [["name", "Alice"], ["age", 25], ["email", "alice@example.com"]]

    // 使用 entries 遍历
    for (let [key, value] of Object.entries(user)) {
        console.log(`${key}: ${value}`);
    }
})();

// 属性描述符
(()=>{
    let user = {};

    // 定义属性及其描述符
    Object.defineProperty(user, "name", {
        value: "Alice",
        writable: false,      // 不可写
        enumerable: true,     // 可枚举
        configurable: false   // 不可配置（不能删除或修改描述符）
    });

    console.log(user.name); // "Alice"
    user.name = "Bob"; // 静默失败（严格模式下报错）
    console.log(user.name); // "Alice"

    // 批量定义属性
    let product = {};
    Object.defineProperties(product, {
        name: { value: "Laptop", writable: true },
        price: { value: 999, writable: false },
        _discount: { value: 0.1, writable: true, enumerable: false }
    });

    console.log(product.name); // "Laptop"
    console.log(product.price); // 999
    console.log(Object.keys(product)); // ["name", "price"]（_discount 不可枚举）
})();

// Getter 和 Setter
(()=>{
    let user = {
        firstName: "Alice",
        lastName: "Smith",
        
        // Getter
        get fullName() {
            return `${this.firstName} ${this.lastName}`;
        },
        
        // Setter
        set fullName(name) {
            [this.firstName, this.lastName] = name.split(" ");
        }
    };

    console.log(user.fullName); // "Alice Smith"
    user.fullName = "Bob Johnson";
    console.log(user.firstName); // "Bob"
    console.log(user.lastName); // "Johnson"
})();

// 对象合并与克隆
(()=>{
    let defaults = { theme: "light", lang: "en" };
    let userPrefs = { theme: "dark" };

    // Object.assign()：浅合并
    let config = Object.assign({}, defaults, userPrefs);
    console.log(config); // {theme: "dark", lang: "en"}

    // 展开运算符（推荐）
    let config2 = { ...defaults, ...userPrefs };
    console.log(config2); // {theme: "dark", lang: "en"}

    // 深克隆（JSON 方式，有局限）
    let original = { a: 1, b: { c: 2 } };
    let cloned = JSON.parse(JSON.stringify(original));
    cloned.b.c = 3;
    console.log(original.b.c); // 2（不受影响）
    console.log(cloned.b.c); // 3

    // 结构化克隆（ES2022，更全面）
    let deepCloned = structuredClone(original);
    deepCloned.b.c = 4;
    console.log(original.b.c); // 2
})();

// 对象检查
(()=>{
    let user = { name: "Alice" };

    // hasOwnProperty()：检查自身属性
    console.log(user.hasOwnProperty("name")); // true
    console.log(user.hasOwnProperty("toString")); // false（继承属性）

    // in 运算符：检查自身和原型链属性
    console.log("name" in user); // true
    console.log("toString" in user); // true

    // Object.hasOwn()（ES2022，推荐替代 hasOwnProperty）
    console.log(Object.hasOwn(user, "name")); // true

    // Object.is()：严格相等比较
    console.log(Object.is(NaN, NaN)); // true
    console.log(NaN === NaN); // false
    console.log(Object.is(+0, -0)); // false
    console.log(+0 === -0); // true
})();

// 对象保护
(()=>{
    let user = { name: "Alice", age: 25 };

    // preventExtensions()：禁止添加新属性
    Object.preventExtensions(user);
    user.email = "alice@example.com"; // 静默失败
    console.log(user.email); // undefined
    console.log(Object.isExtensible(user)); // false

    // seal()：密封对象（禁止添加/删除，但可修改）
    let sealed = Object.seal({ name: "Bob" });
    sealed.name = "Robert"; // 可以修改
    delete sealed.name; // 无法删除
    console.log(sealed.name); // "Robert"
    console.log(Object.isSealed(sealed)); // true

    // freeze()：冻结对象（完全不可变）
    let frozen = Object.freeze({ name: "Charlie" });
    frozen.name = "Charles"; // 无法修改
    frozen.age = 30; // 无法添加
    delete frozen.name; // 无法删除
    console.log(frozen.name); // "Charlie"
    console.log(Object.isFrozen(frozen)); // true
})();

// 实用方法
(()=>{
    // Object.fromEntries()：键值对转对象（ES2019）
    let entries = [["name", "Alice"], ["age", 25]];
    let obj = Object.fromEntries(entries);
    console.log(obj); // {name: "Alice", age: 25}

    // 过滤对象属性
    let user = { name: "Alice", age: 25, password: "secret" };
    let safe = Object.fromEntries(
        Object.entries(user).filter(([key]) => key !== "password")
    );
    console.log(safe); // {name: "Alice", age: 25}

    // 可选链操作符（ES2020）
    let data = { user: { address: { city: "Beijing" } } };
    console.log(data?.user?.address?.city); // "Beijing"
    console.log(data?.user?.phone?.number); // undefined（不会报错）

    // 空值合并运算符（ES2020）
    let value = null ?? "default";
    console.log(value); // "default"
    let zero = 0 ?? "default";
    console.log(zero); // 0（只有 null/undefined 才使用默认值）
})();
