/**
 * 只能有一个 public 类
 * 如果文件中有一个类声明为 public，那么这个类的名称必须与文件名相同
 * public 修饰类，可以理解为 JavaScript 的 export 导出
 */
public class App {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}

/**
 * 非 public 类，类似 JavaScript 中未导出的类
 */
class Helper {
    void sayHello() {
        System.out.println("Hello from Helper!");
    }
}

/*
 * Java 文件的顶级作用域
 * Java 是一种纯面向对象语言（除基本类型外），强调所有方法和变量都属于某个类
 * 在 Java 中，文件的顶级作用域只能包含类、接口、枚举等类型定义
 * 不能直接定义（且不存在）全局方法或变量
 */

/*
 * 最佳实践
 * 每个类一个文件，这使得类名和文件名对应，方便定位和查找
 * 避免在一个文件中写多个类，这会使得文件混乱，难以维护
 * 在小型项目或快速开发原型中，且类间逻辑简单时，可以在一个文件中包含多个非 public 类
 */
