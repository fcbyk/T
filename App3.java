class App3 {
    // 逻辑运算符
    public static void main(String[] args){
        System.out.println("===== 逻辑运算符 =====");
        boolean x = true;
        boolean y = false;
        System.out.println("x && y = " + (x && y));
        System.out.println("x || y = " + (x || y));
        System.out.println("!x = " + (!x));
        
        // 短路逻辑运算符演示
        System.out.println("\n===== 短路逻辑运算符 =====");
        int c = 5;
        boolean result = (c > 3) || (++c > 10); // ++c不会执行，因为前面为true
        System.out.println("(c > 3) || (++c > 10) 的结果: " + result);
        System.out.println("c 的值: " + c); // c仍然是5
    }
}