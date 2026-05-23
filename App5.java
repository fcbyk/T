class App5 {
    // 自增自减运算符
    public static void main(String[] args){
        System.out.println("===== 自增自减运算符 =====");
        int e = 10;
        System.out.println("e = " + e);
        System.out.println("e++ = " + (e++));  // 先使用再加1
        System.out.println("e++ 后, e = " + e);
        System.out.println("++e = " + (++e));  // 先加1再使用
        System.out.println("++e 后, e = " + e);
        
        int f = 10;
        System.out.println("\nf = " + f);
        System.out.println("f-- = " + (f--));  // 先使用再减1
        System.out.println("f-- 后, f = " + f);
        System.out.println("--f = " + (--f));  // 先减1再使用
        System.out.println("--f 后, f = " + f);
    }
}