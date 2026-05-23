class App7 {
    // 位运算符
    public static void main(String[] args){
        System.out.println("===== 位运算符 =====");
        int i = 5;   // 二进制: 0101
        int j = 3;   // 二进制: 0011
        System.out.println("i & j = " + (i & j));   // 按位与: 0001 = 1
        System.out.println("i | j = " + (i | j));   // 按位或: 0111 = 7
        System.out.println("i ^ j = " + (i ^ j));   // 按位异或: 0110 = 6
        System.out.println("~i = " + (~i));          // 按位取反: 1010 = -6
        System.out.println("i << 1 = " + (i << 1));  // 左移1位: 1010 = 10
        System.out.println("i >> 1 = " + (i >> 1));  // 右移1位: 0010 = 2
    }
}