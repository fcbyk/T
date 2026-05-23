class App1 {
    // 方法定义和调用
    
    // 无参数无返回值的方法
    public static void sayHello() {
        System.out.println("你好，世界！");
    }
    
    // 有参数无返回值的方法
    public static void greet(String name) {
        System.out.println("你好，" + name + "！");
    }
    
    // 有参数有返回值的方法
    public static int add(int a, int b) {
        return a + b;
    }
    
    // 多个参数的方法
    public static double calculateArea(double length, double width) {
        return length * width;
    }
    
    public static void main(String[] args){
        System.out.println("===== 方法定义和调用 =====");
        
        // 调用无参数无返回值的方法
        System.out.println("\n1. 无参数无返回值:");
        sayHello();
        
        // 调用有参数无返回值的方法
        System.out.println("\n2. 有参数无返回值:");
        greet("张三");
        greet("李四");
        
        // 调用有参数有返回值的方法
        System.out.println("\n3. 有参数有返回值:");
        int sum = add(10, 20);
        System.out.println("10 + 20 = " + sum);
        System.out.println("5 + 8 = " + add(5, 8));
        
        // 调用多个参数的方法
        System.out.println("\n4. 多个参数:");
        double area = calculateArea(5.5, 3.2);
        System.out.println("长5.5，宽3.2的矩形面积: " + area);
    }
}