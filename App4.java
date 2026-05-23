class App4 {
    // 赋值运算符
    public static void main(String[] args){
        System.out.println("===== 赋值运算符 =====");
        int d = 10;
        System.out.println("初始值 d = " + d);
        d += 5;  // d = d + 5
        System.out.println("d += 5 后, d = " + d);
        d -= 3;  // d = d - 3
        System.out.println("d -= 3 后, d = " + d);
        d *= 2;  // d = d * 2
        System.out.println("d *= 2 后, d = " + d);
        d /= 4;  // d = d / 4
        System.out.println("d /= 4 后, d = " + d);
        d %= 3;  // d = d % 3
        System.out.println("d %= 3 后, d = " + d);
    }
}