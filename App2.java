// 属性修饰符
class App2 {
    // 访问控制修饰符
    int num;
    private String name;
    public int age;

    // 默认访问控制修饰符
    protected boolean bol;

    // 非访问修饰符

    // final 表示常量，一旦赋值就不能再改变
    final int id = 9527;

    // static 表示静态变量，属于类而不是对象
    static String hello;

    // transient 表示瞬时变量，不会被序列化
    transient int transientField;

    // volatile 表示易变变量，多线程环境下会强制从主内存中读取变量的值
    volatile int volatileField;
}
