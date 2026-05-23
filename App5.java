class App5 {
    // 可变参数（Varargs）
    
    // 使用可变参数求和
    public static int sum(int... numbers) {
        int total = 0;
        for (int num : numbers) {
            total += num;
        }
        return total;
    }
    
    // 可变参数打印所有参数
    public static void printAll(String... messages) {
        System.out.println("收到 " + messages.length + " 个参数:");
        for (String msg : messages) {
            System.out.println("  - " + msg);
        }
    }
    
    // 可变参数与其他参数组合
    public static void printInfo(String name, int... scores) {
        System.out.print(name + " 的成绩: ");
        int sum = 0;
        for (int score : scores) {
            System.out.print(score + " ");
            sum += score;
        }
        double avg = scores.length > 0 ? (double)sum / scores.length : 0;
        System.out.println("(平均分: " + String.format("%.2f", avg) + ")");
    }
    
    // 查找最大值
    public static int findMax(int... numbers) {
        if (numbers.length == 0) {
            throw new IllegalArgumentException("至少需要一个参数");
        }
        int max = numbers[0];
        for (int num : numbers) {
            if (num > max) {
                max = num;
            }
        }
        return max;
    }
    
    public static void main(String[] args){
        System.out.println("===== 可变参数 =====");
        
        // 可变参数求和
        System.out.println("\n1. 可变参数求和:");
        System.out.println("sum(1, 2, 3) = " + sum(1, 2, 3));
        System.out.println("sum(10, 20, 30, 40, 50) = " + sum(10, 20, 30, 40, 50));
        System.out.println("sum() = " + sum());  // 0个参数
        
        // 可变参数打印
        System.out.println("\n2. 可变参数打印:");
        printAll("Hello");
        printAll("Java", "Python", "C++");
        printAll();  // 0个参数
        
        // 可变参数与其他参数组合
        System.out.println("\n3. 可变参数与普通参数组合:");
        printInfo("张三", 85, 90, 78);
        printInfo("李四", 92, 88, 95, 90);
        
        // 查找最大值
        System.out.println("\n4. 查找最大值:");
        System.out.println("max(3, 7, 2, 9, 1) = " + findMax(3, 7, 2, 9, 1));
        System.out.println("max(100) = " + findMax(100));
    }
}