/**
 * Getter/Setter 访问器
 * 
 * 知识点：
 * 1. getter/setter 可以像属性一样访问，但实际执行的是方法
 * 2. 可以实现数据验证和计算属性
 * 3. 支持私有字段的封装访问
 */

class Rectangle {
    constructor(width, height) {
        this._width = width;   // 使用下划线约定表示"内部"属性
        this._height = height;
    }

    // Getter: 获取宽度
    get width() {
        console.log('获取 width');
        return this._width;
    }

    // Setter: 设置宽度（带验证）
    set width(value) {
        console.log('设置 width');
        if (value <= 0) {
            throw new Error('宽度必须大于0');
        }
        this._width = value;
    }

    // Getter: 获取高度
    get height() {
        return this._height;
    }

    // Setter: 设置高度（带验证）
    set height(value) {
        if (value <= 0) {
            throw new Error('高度必须大于0');
        }
        this._height = value;
    }

    // 计算属性：面积
    get area() {
        return this._width * this._height;
    }

    // 计算属性：周长
    get perimeter() {
        return 2 * (this._width + this._height);
    }

    toString() {
        return `Rectangle(${this._width} x ${this._height})`;
    }
}

// 测试
const rect = new Rectangle(5, 10);
console.log(rect.toString());
console.log('面积:', rect.area);      // 像访问属性一样调用 getter
console.log('周长:', rect.perimeter);

rect.width = 8;  // 调用 setter
console.log('新面积:', rect.area);

try {
    rect.width = -5;  // 触发验证错误
} catch (e) {
    console.log('错误:', e.message);
}

// ===== 使用 # 私有字段的 getter/setter =====
class BankAccount {
    #balance = 0;  // 真正的私有字段

    constructor(owner) {
        this.owner = owner;
    }

    // 公开接口访问私有字段
    get balance() {
        return this.#balance;
    }

    deposit(amount) {
        if (amount > 0) {
            this.#balance += amount;
        }
    }

    withdraw(amount) {
        if (amount > 0 && amount <= this.#balance) {
            this.#balance -= amount;
        }
    }
}

const account = new BankAccount('张三');
account.deposit(1000);
console.log('\n银行账户余额:', account.balance);  // 1000
account.withdraw(300);
console.log('取款后余额:', account.balance);  // 700
// console.log(account.#balance);  // ❌ SyntaxError: 无法访问私有字段
