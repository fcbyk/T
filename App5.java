class App5 {
    // do-while 循环语句
    public static void main(String[] args){
        System.out.println("===== do-while 循环语句 =====");
        
        // 基本 do-while 循环
        System.out.println("\n1. 基本 do-while 循环:");
        int i = 1;
        do {
            System.out.print(i + " ");
            i++;
        } while (i <= 5);
        System.out.println();
        
        // do-while 至少执行一次的特性
        System.out.println("\n2. do-while 至少执行一次:");
        int j = 10;
        do {
            System.out.println("j = " + j + " (即使条件不满足也会执行一次)");
        } while (j < 5);  // 条件为false，但循环体已执行一次
        
        // do-while 用户输入模拟
        System.out.println("\n3. do-while 累加示例:");
        int sum = 0;
        int number = 1;
        do {
            sum += number;
            System.out.println("当前数字: " + number + ", 累计和: " + sum);
            number++;
        } while (number <= 5);
        
        // do-while 与 while 的对比
        System.out.println("\n4. do-while vs while 对比:");
        int x = 0;
        System.out.print("while循环: ");
        while (x > 0) {  // 条件一开始就为false
            System.out.print("不会执行 ");
        }
        System.out.println("(无输出)");
        
        int y = 0;
        System.out.print("do-while循环: ");
        do {
            System.out.print("执行了一次 ");
        } while (y > 0);  // 条件为false，但已执行一次
        System.out.println();
    }
}