/**
 * Mixin 混入模式
 * 
 * 知识点：
 * 1. JavaScript 不支持多重继承，但可以通过 Mixin 实现类似功能
 * 2. Mixin 是包含方法的对象，可以"混入"到类中
 * 3. 使用 Object.assign 或函数组合实现
 * 4. 适用于代码复用和横向关注点（如日志、验证等）
 */

// ===== 1. 基础 Mixin =====

// 定义可序列化的 Mixin
const SerializableMixin = {
    serialize() {
        return JSON.stringify(this);
    },

    deserialize(json) {
        const data = JSON.parse(json);
        Object.assign(this, data);
        return this;
    }
};

// 定义可观察的 Mixin
const ObservableMixin = {
    observers: [],

    subscribe(callback) {
        this.observers.push(callback);
    },

    unsubscribe(callback) {
        this.observers = this.observers.filter(obs => obs !== callback);
    },

    notify(data) {
        this.observers.forEach(callback => callback(data));
    }
};

// 使用 Mixin 创建类
class Product {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }

    updatePrice(newPrice) {
        this.price = newPrice;
        // 通知观察者
        if (this.notify) {
            this.notify({ name: this.name, price: newPrice });
        }
    }
}

// 将 Mixin 混入到 Product 类
Object.assign(Product.prototype, SerializableMixin, ObservableMixin);

// 测试
const product = new Product('手机', 5999);
console.log('序列化:', product.serialize());

product.subscribe((data) => {
    console.log('价格变动通知:', data);
});

product.updatePrice(5499);
product.unsubscribe(product.observers[0]);


// ===== 2. Mixin 工厂函数（更灵活）=====

// 日志 Mixin 工厂
function withLogging(BaseClass) {
    return class extends BaseClass {
        log(message) {
            console.log(`[LOG] ${this.constructor.name}: ${message}`);
        }

        error(message) {
            console.error(`[ERROR] ${this.constructor.name}: ${message}`);
        }
    };
}

// 验证 Mixin 工厂
function withValidation(BaseClass) {
    return class extends BaseClass {
        validate(requiredFields) {
            for (const field of requiredFields) {
                if (!this[field]) {
                    throw new Error(`缺少必需字段: ${field}`);
                }
            }
            return true;
        }
    };
}

// 时间戳 Mixin 工厂
function withTimestamps(BaseClass) {
    return class extends BaseClass {
        constructor(...args) {
            super(...args);
            this.createdAt = new Date();
            this.updatedAt = new Date();
        }

        touch() {
            this.updatedAt = new Date();
        }
    };
}

// 组合多个 Mixin
class User extends withTimestamps(withValidation(withLogging(class {}))) {
    constructor(name, email) {
        super();
        this.name = name;
        this.email = email;
    }

    save() {
        this.validate(['name', 'email']);
        this.log('保存用户');
        this.touch();
        console.log('用户已保存:', this);
    }
}

const user = new User('张三', 'zhangsan@example.com');
user.save();
console.log('创建时间:', user.createdAt);
console.log('更新时间:', user.updatedAt);


// ===== 3. Mixin 方法冲突处理 =====

const FlyMixin = {
    fly() {
        console.log(`${this.name} 在飞翔`);
    },

    land() {
        console.log(`${this.name} 着陆`);
    }
};

const SwimMixin = {
    swim() {
        console.log(`${this.name} 在游泳`);
    },

    dive() {
        console.log(`${this.name} 潜水`);
    }
};

// 如果多个 Mixin 有同名方法，后面的会覆盖前面的
class Duck {
    constructor(name) {
        this.name = name;
    }
}

Object.assign(Duck.prototype, FlyMixin, SwimMixin);

const duck = new Duck('唐老鸭');
duck.fly();   // 唐老鸭 在飞翔
duck.swim();  // 唐老鸭 在游泳


// ===== 4. 条件 Mixin =====

function withCache(BaseClass, options = {}) {
    const { maxSize = 100 } = options;

    return class extends BaseClass {
        #cache = new Map();

        getCached(key, computeFn) {
            if (this.#cache.has(key)) {
                console.log(`缓存命中: ${key}`);
                return this.#cache.get(key);
            }

            console.log(`缓存未命中，计算: ${key}`);
            const value = computeFn();
            
            // 简单的 LRU 策略
            if (this.#cache.size >= maxSize) {
                const firstKey = this.#cache.keys().next().value;
                this.#cache.delete(firstKey);
            }
            
            this.#cache.set(key, value);
            return value;
        }

        clearCache() {
            this.#cache.clear();
        }

        get cacheSize() {
            return this.#cache.size;
        }
    };
}

class DataService extends withCache(class {}) {
    fetchData(id) {
        return this.getCached(`data_${id}`, () => {
            // 模拟耗时操作
            return { id, data: `数据内容_${id}`, timestamp: Date.now() };
        });
    }
}

const service = new DataService();
console.log('\n第一次获取:', service.fetchData(1));  // 缓存未命中
console.log('第二次获取:', service.fetchData(1));  // 缓存命中
console.log('缓存大小:', service.cacheSize);


// ===== 5. Mixin vs 继承对比 =====

console.log('\n=== Mixin vs 继承 ===');
console.log('继承: 纵向扩展（is-a 关系）');
console.log('Mixin: 横向扩展（has-a/can-do 能力）');
console.log('优点:');
console.log('  - 避免深层继承链');
console.log('  - 支持组合多个能力');
console.log('  - 更灵活的代码复用');
console.log('缺点:');
console.log('  - 可能有命名冲突');
console.log('  - 调试相对复杂');
