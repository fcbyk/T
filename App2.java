class App2 {
    // 方法重载（Overloading）
    
    // 重载：参数个数不同
    public static int add(int a, int b) {
        return a + b;
    }
    
    public static int add(int a, int b, int c) {
        return a + b + c;
    }
    
    // 重载：参数类型不同
    public static double add(double a, double b) {
        return a + b;
    }
    
    // 重载：参数顺序不同
    public static void printInfo(String name, int age) {
        System.out.println("姓名: " + name + ", 年龄: " + age);
    }
    
    public static void printInfo(int age, String name) {
        System.out.println("年龄: " + age + ", 姓名: " + name);
    }
    
    public static void main(String[] args){
        System.out.println("===== 方法重载 =====");
        
        // 调用两个参数的add方法
        System.out.println("\n1. 参数个数不同的重载:");
        System.out.println("add(10, 20) = " + add(10, 20));
        System.out.println("add(10, 20, 30) = " + add(10, 20, 30));
        
        // 调用不同类型的add方法
        System.out.println("\n2. 参数类型不同的重载:");
        System.out.println("add(10.5, 20.3) = " + add(10.5, 20.3));
        System.out.println("add(5, 8) = " + add(5, 8));  // 调用int版本
        
        // 调用参数顺序不同的方法
        System.out.println("\n3. 参数顺序不同的重载:");
        printInfo("张三", 20);
        printInfo(25, "李四");
        
        // Java会自动选择最合适的方法
        System.out.println("\n4. 自动类型匹配:");
        System.out.println("add(1, 2) = " + add(1, 2));        // int
        System.out.println("add(1.0, 2.0) = " + add(1.0, 2.0)); // double
    }
}