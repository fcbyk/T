class App6 {
    // break 和 continue 语句
    public static void main(String[] args){
        System.out.println("===== break 和 continue 语句 =====");
        
        // break 跳出循环
        System.out.println("\n1. break 跳出循环:");
        for (int i = 1; i <= 10; i++) {
            if (i == 6) {
                System.out.println("遇到 " + i + "，跳出循环");
                break;
            }
            System.out.print(i + " ");
        }
        System.out.println();
        
        // continue 跳过本次循环
        System.out.println("\n2. continue 跳过本次循环:");
        for (int i = 1; i <= 10; i++) {
            if (i % 2 == 0) {
                continue;  // 跳过偶数
            }
            System.out.print(i + " ");
        }
        System.out.println("(只打印奇数)");
        
        // break 在嵌套循环中的使用
        System.out.println("\n3. break 在嵌套循环中:");
        outer: for (int i = 1; i <= 3; i++) {
            for (int j = 1; j <= 3; j++) {
                if (i == 2 && j == 2) {
                    System.out.println("遇到 (" + i + "," + j + ")，跳出外层循环");
                    break outer;  // 跳出外层循环
                }
                System.out.print("(" + i + "," + j + ") ");
            }
            System.out.println();
        }
        
        // continue 在嵌套循环中的使用
        System.out.println("\n4. continue 在嵌套循环中:");
        for (int i = 1; i <= 3; i++) {
            for (int j = 1; j <= 3; j++) {
                if (j == 2) {
                    continue;  // 跳过内层循环的当前迭代
                }
                System.out.print("(" + i + "," + j + ") ");
            }
            System.out.println();
        }
        
        // break 和 continue 在实际应用中的示例
        System.out.println("\n5. 查找第一个能被13整除的数:");
        int result = 0;
        for (int i = 1; i <= 100; i++) {
            if (i % 13 == 0) {
                result = i;
                System.out.println("找到: " + i);
                break;
            }
        }
    }
}