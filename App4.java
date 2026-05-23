class App4 {
    // 递归方法
    
    // 递归计算阶乘
    public static long factorial(int n) {
        if (n <= 1) {
            return 1;
        }
        return n * factorial(n - 1);
    }
    
    // 递归计算斐波那契数列
    public static int fibonacci(int n) {
        if (n <= 0) {
            return 0;
        }
        if (n == 1) {
            return 1;
        }
        return fibonacci(n - 1) + fibonacci(n - 2);
    }
    
    // 递归求和
    public static int recursiveSum(int n) {
        if (n <= 0) {
            return 0;
        }
        return n + recursiveSum(n - 1);
    }
    
    // 递归打印数字
    public static void printNumbers(int n) {
        if (n > 0) {
            printNumbers(n - 1);
            System.out.print(n + " ");
        }
    }
    
    public static void main(String[] args){
        System.out.println("===== 递归方法 =====");
        
        // 计算阶乘
        System.out.println("\n1. 递归计算阶乘:");
        System.out.println("5! = " + factorial(5));
        System.out.println("10! = " + factorial(10));
        System.out.println("0! = " + factorial(0));
        
        // 斐波那契数列
        System.out.println("\n2. 递归计算斐波那契数列:");
        System.out.print("前10个斐波那契数: ");
        for (int i = 0; i < 10; i++) {
            System.out.print(fibonacci(i) + " ");
        }
        System.out.println();
        
        // 递归求和
        System.out.println("\n3. 递归求和 (1-10):");
        System.out.println("1+2+...+10 = " + recursiveSum(10));
        
        // 递归打印
        System.out.println("\n4. 递归打印数字 (1-10):");
        printNumbers(10);
        System.out.println();
    }
}