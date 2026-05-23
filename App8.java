class App8 {
    // instanceof 运算符
    public static void main(String[] args){
        System.out.println("===== instanceof 运算符 =====");
        String str = "Hello";
        Object obj = str;
        System.out.println("str instanceof String: " + (str instanceof String));
        System.out.println("obj instanceof String: " + (obj instanceof String));
        System.out.println("obj instanceof Object: " + (obj instanceof Object));
    }
}