class App4 {
    // while 循环语句
    public static void main(String[] args){
        System.out.println("===== while 循环语句 =====");
        
        // 基本 while 循环
        System.out.println("\n1. 基本 while 循环:");
        int i = 1;
        while (i <= 5) {
            System.out.print(i + " ");
            i++;
        }
        System.out.println();
        
        // while 循环求和
        System.out.println("\n2. while 循环求和 (1-10):");
        int sum = 0;
        int num = 1;
        while (num <= 10) {
            sum += num;
            num++;
        }
        System.out.println("1+2+3+...+10 = " + sum);
        
        // while 循环找第一个能被7整除的数
        System.out.println("\n3. while 循环查找:");
        int n = 1;
        while (n % 7 != 0) {
            n++;
        }
        System.out.println("第一个能被7整除的正整数是: " + n);
        
        // 无限 while 循环（需要break退出）
        System.out.println("\n4. 带 break 的 while 循环:");
        int count = 0;
        while (true) {
            count++;
            System.out.print(count + " ");
            if (count >= 5) {
                break;  // 退出循环
            }
        }
        System.out.println();
    }
}