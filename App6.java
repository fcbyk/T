class App6 {
    // 三元运算符（条件运算符）
    public static void main(String[] args){
        System.out.println("===== 三元运算符 =====");
        int g = 15;
        int h = 20;
        int max = (g > h) ? g : h;
        System.out.println("g = " + g + ", h = " + h);
        System.out.println("最大值: " + max);
        
        String status = (g >= 18) ? "成年" : "未成年";
        System.out.println("状态: " + status);
    }
}