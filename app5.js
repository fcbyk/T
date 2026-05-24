/**
 * 静态属性和方法深入
 * 
 * 知识点：
 * 1. static 关键字定义静态成员（属于类本身，不属于实例）
 * 2. 静态方法中 this 指向类本身
 * 3. 静态属性可以用于单例模式、工厂模式等
 * 4. 静态代码块（Static Initialization Blocks）- ES2022
 */

class Database {
    // 静态属性：共享配置
    static config = {
        host: 'localhost',
        port: 3306,
        database: 'mydb'
    };

    // 静态私有字段
    static #instance = null;
    static #connectionCount = 0;

    constructor(name) {
        this.name = name;
        Database.#connectionCount++;
        console.log(`创建连接: ${name}, 当前连接数: ${Database.#connectionCount}`);
    }

    // 静态方法：工厂方法
    static createConnection(name) {
        console.log(`使用配置:`, this.config);  // this 指向 Database 类
        return new Database(name);
    }

    // 静态方法：单例模式
    static getInstance() {
        if (!Database.#instance) {
            Database.#instance = new Database('Singleton');
        }
        return Database.#instance;
    }

    // 静态方法：获取连接统计
    static getConnectionCount() {
        return Database.#connectionCount;
    }

    query(sql) {
        console.log(`[${this.name}] 执行查询: ${sql}`);
    }
}

// 测试静态方法
const db1 = Database.createConnection('Connection1');
db1.query('SELECT * FROM users');

const db2 = Database.createConnection('Connection2');
console.log('连接数:', Database.getConnectionCount());  // 2

// 测试单例模式
const instance1 = Database.getInstance();
const instance2 = Database.getInstance();
console.log('是否同一实例:', instance1 === instance2);  // true


// ===== 静态代码块（ES2022）=====
class ConfigManager {
    static settings = {};

    // 静态代码块：在类定义时执行，用于复杂初始化
    static {
        console.log('ConfigManager 类初始化...');
        
        // 可以从外部加载配置
        this.settings.env = process.env.NODE_ENV || 'development';
        this.settings.version = '1.0.0';
        this.settings.debug = false;
        
        console.log('配置加载完成:', this.settings);
    }

    static getSetting(key) {
        return this.settings[key];
    }

    static setSetting(key, value) {
        this.settings[key] = value;
    }
}

console.log('\n环境:', ConfigManager.getSetting('env'));
console.log('版本:', ConfigManager.getSetting('version'));


// ===== 静态继承 =====
class Animal {
    static species = '未知';

    static identify() {
        return `这是一个${this.species}`;  // this 指向调用者
    }
}

class Dog extends Animal {
    static species = '狗';
}

class Cat extends Animal {
    static species = '猫';
}

console.log('\n', Dog.identify());  // 这是一个狗
console.log(Cat.identify());  // 这是一个猫
