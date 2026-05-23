// 构造函数
class Student {
    public String name;
    private int age;

    // 构造方法不用写返回值，方法名 = 类名

    // 无参构造方法，默认就存在，可以不写
    public Student() {}

    // 因存在重载机制，可有多个构造方法
    public Student(String name, int age) {
        this.name = name;
        this.age = age;
    }

    public Student(String name) {
        this.name = name;
    }

    public static void main(String[] args) {
        // new = 在堆内存中为新实例分配一块存储空间并存储
        // 返回堆中分配对象的地址引用，保存在栈内存中的变量中
        Student student1 = new Student();
        Student student2 = new Student("John", 23);
        Student student3 = new Student("Mary");
    }
}