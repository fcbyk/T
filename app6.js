/**
 * Symbol 和私有字段高级用法
 * 
 * 知识点：
 * 1. Symbol 作为属性名，实现"伪私有"
 * 2. # 私有字段（Private Fields）- ES2022
 * 3. 私有方法
 * 4. 弱映射（WeakMap）模拟私有属性
 */

// ===== 1. Symbol 实现伪私有 =====
const _password = Symbol('password');
const _validate = Symbol('validate');

class UserWithSymbol {
    constructor(username, password) {
        this.username = username;
        this[_password] = password;  // Symbol 属性
    }

    [_validate]() {  // Symbol 方法
        return this[_password].length >= 6;
    }

    login(inputPassword) {
        if (this[_validate]() && inputPassword === this[_password]) {
            return '登录成功';
        }
        return '登录失败';
    }
}

const user1 = new UserWithSymbol('alice', '123456');
console.log('用户名:', user1.username);
console.log('登录:', user1.login('123456'));
// Symbol 属性不会被 Object.keys() 遍历
console.log('公开属性:', Object.keys(user1));  // ['username']
// 但可以通过 Object.getOwnPropertySymbols() 获取
console.log('Symbol属性:', Object.getOwnPropertySymbols(user1));


// ===== 2. # 私有字段（真正的私有）=====
class SecureUser {
    #password;
    #token = null;

    constructor(username, password) {
        this.username = username;
        this.#password = password;
    }

    // 私有方法
    #hashPassword(pwd) {
        // 简化的哈希模拟
        return pwd.split('').reverse().join('') + '_hashed';
    }

    #generateToken() {
        return 'token_' + Math.random().toString(36).substr(2);
    }

    login(password) {
        if (password === this.#password) {
            this.#token = this.#generateToken();
            return { success: true, token: this.#token };
        }
        return { success: false, message: '密码错误' };
    }

    getToken() {
        return this.#token;
    }

    // 尝试访问私有字段会报错
    showPassword() {
        // return this.#password;  // ✅ 在类内部可以访问
        return '***';  // 对外隐藏
    }
}

const user2 = new SecureUser('bob', 'secret123');
console.log('\n登录结果:', user2.login('secret123'));
console.log('Token:', user2.getToken());
console.log('密码显示:', user2.showPassword());
// console.log(user2.#password);  // ❌ SyntaxError: Private field '#password' must be declared in an enclosing class


// ===== 3. 私有字段的继承限制 =====
class Parent {
    #privateValue = 'parent';

    getParentValue() {
        return this.#privateValue;
    }
}

class Child extends Parent {
    #privateValue = 'child';

    getChildValue() {
        return this.#privateValue;
    }

    // 无法访问父类的私有字段
    // getBothValues() {
    //     return [this.#privateValue, super.#privateValue];  // ❌ 错误
    // }
}

const child = new Child();
console.log('\n父类值:', child.getParentValue());  // parent
console.log('子类值:', child.getChildValue());  // child


// ===== 4. WeakMap 模拟私有属性（传统方案）=====
const privateData = new WeakMap();

class LegacyUser {
    constructor(name, secret) {
        this.name = name;
        // 使用 WeakMap 存储私有数据
        privateData.set(this, { secret });
    }

    getSecret() {
        return privateData.get(this).secret;
    }

    setSecret(newSecret) {
        privateData.get(this).secret = newSecret;
    }
}

const user3 = new LegacyUser('charlie', 'my-secret');
console.log('\n秘密:', user3.getSecret());
user3.setSecret('new-secret');
console.log('新秘密:', user3.getSecret());
// 外部无法直接访问 privateData 中的内容


// ===== 5. 私有静态字段和方法 =====
class Counter {
    static #count = 0;

    constructor() {
        Counter.#count++;
    }

    static getCount() {
        return Counter.#count;
    }

    static #reset() {
        Counter.#count = 0;
    }

    static forceReset() {
        Counter.#reset();
    }
}

new Counter();
new Counter();
new Counter();
console.log('\n计数器:', Counter.getCount());  // 3
Counter.forceReset();
console.log('重置后:', Counter.getCount());  // 0
