class App3 {
    // for 循环语句
    public static void main(String[] args){
        System.out.println("===== for 循环语句 =====");
        
        // 基本 for 循环
        System.out.println("\n1. 基本 for 循环:");
        for (int i = 1; i <= 5; i++) {
            System.out.print(i + " ");
        }
        System.out.println();
        
        // 倒序 for 循环
        System.out.println("\n2. 倒序 for 循环:");
        for (int i = 5; i >= 1; i--) {
            System.out.print(i + " ");
        }
        System.out.println();
        
        // 步长为2的 for 循环
        System.out.println("\n3. 步长为2的 for 循环:");
        for (int i = 0; i <= 10; i += 2) {
            System.out.print(i + " ");
        }
        System.out.println();
        
        // 嵌套 for 循环 - 打印乘法表
        System.out.println("\n4. 嵌套 for 循环 - 9x9乘法表:");
        for (int i = 1; i <= 3; i++) {
            for (int j = 1; j <= i; j++) {
                System.out.print(j + "x" + i + "=" + (i*j) + "\t");
            }
            System.out.println();
        }
        
        // 增强 for 循环（for-each）
        System.out.println("\n5. 增强 for 循环:");
        int[] numbers = {10, 20, 30, 40, 50};
        for (int num : numbers) {
            System.out.print(num + " ");
        }
        System.out.println();
        
        // 字符串数组的增强 for 循环
        String[] fruits = {"苹果", "香蕉", "橙子"};
        for (String fruit : fruits) {
            System.out.println("水果: " + fruit);
        }
    }
}