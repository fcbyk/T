class App6 {
    // 方法的作用域和访问修饰符
    
    // 公共方法（public）- 任何地方都可以访问
    public static String getPublicInfo() {
        return "这是公共方法";
    }
    
    // 默认方法（package-private）- 同包内可访问
    static String getDefaultInfo() {
        return "这是默认方法（同包可见）";
    }
    
    // 私有方法（private）- 仅本类可访问
    private static String getPrivateInfo() {
        return "这是私有方法";
    }
    
    // 受保护方法（protected）- 同包或子类可访问
    protected static String getProtectedInfo() {
        return "这是受保护方法";
    }
    
    // 静态方法调用其他方法
    public static void demonstrateAccess() {
        System.out.println("在类内部可以访问所有方法:");
        System.out.println("  - " + getPublicInfo());
        System.out.println("  - " + getDefaultInfo());
        System.out.println("  - " + getPrivateInfo());
        System.out.println("  - " + getProtectedInfo());
    }
    
    // final 方法 - 不能被子类重写
    public final static String getFinalInfo() {
        return "这是final方法，不能被重写";
    }
    
    // synchronized 方法 - 线程安全
    public synchronized static void synchronizedMethod() {
        System.out.println("这是同步方法");
    }
    
    public static void main(String[] args){
        System.out.println("===== 方法的作用域和修饰符 =====");
        
        // 演示不同访问修饰符
        System.out.println("\n1. 访问修饰符示例:");
        demonstrateAccess();
        
        // final方法
        System.out.println("\n2. Final方法:");
        System.out.println(getFinalInfo());
        
        // synchronized方法
        System.out.println("\n3. Synchronized方法:");
        synchronizedMethod();
        
        // 方法的作用域说明
        System.out.println("\n4. 作用域说明:");
        System.out.println("  - public: 任何地方都可访问");
        System.out.println("  - protected: 同包或子类可访问");
        System.out.println("  - default(无修饰符): 同包可访问");
        System.out.println("  - private: 仅本类可访问");
    }
}