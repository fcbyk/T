class App3 {
    // 参数传递：值传递
    
    // 基本数据类型的值传递
    public static void modifyValue(int num) {
        System.out.println("方法内修改前: " + num);
        num = 100;
        System.out.println("方法内修改后: " + num);
    }
    
    // 数组的传递（引用传递的效果）
    public static void modifyArray(int[] arr) {
        System.out.println("方法内修改前: arr[0] = " + arr[0]);
        arr[0] = 999;
        System.out.println("方法内修改后: arr[0] = " + arr[0]);
    }
    
    // 对象的传递
    public static void modifyString(StringBuilder sb) {
        System.out.println("方法内修改前: " + sb.toString());
        sb.append(" World");
        System.out.println("方法内修改后: " + sb.toString());
    }
    
    public static void main(String[] args){
        System.out.println("===== 参数传递 =====");
        
        // 基本数据类型的值传递
        System.out.println("\n1. 基本数据类型（值传递）:");
        int x = 10;
        System.out.println("调用方法前: x = " + x);
        modifyValue(x);
        System.out.println("调用方法后: x = " + x);  // x仍然是10
        
        // 数组的传递
        System.out.println("\n2. 数组传递（引用类型）:");
        int[] numbers = {1, 2, 3};
        System.out.println("调用方法前: numbers[0] = " + numbers[0]);
        modifyArray(numbers);
        System.out.println("调用方法后: numbers[0] = " + numbers[0]);  // numbers[0]变成999
        
        // 对象的传递
        System.out.println("\n3. 对象传递（引用类型）:");
        StringBuilder sb = new StringBuilder("Hello");
        System.out.println("调用方法前: " + sb.toString());
        modifyString(sb);
        System.out.println("调用方法后: " + sb.toString());  // 变成"Hello World"
    }
}