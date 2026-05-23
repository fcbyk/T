class App1 {
    // if-else 条件语句
    public static void main(String[] args){
        System.out.println("===== if-else 条件语句 =====");
        
        // 简单 if 语句
        int score = 85;
        if (score >= 60) {
            System.out.println("成绩: " + score + " - 及格");
        }
        
        // if-else 语句
        int age = 20;
        if (age >= 18) {
            System.out.println("年龄: " + age + " - 成年");
        } else {
            System.out.println("年龄: " + age + " - 未成年");
        }
        
        // if-else if-else 多分支
        int grade = 75;
        if (grade >= 90) {
            System.out.println("等级: A");
        } else if (grade >= 80) {
            System.out.println("等级: B");
        } else if (grade >= 70) {
            System.out.println("等级: C");
        } else if (grade >= 60) {
            System.out.println("等级: D");
        } else {
            System.out.println("等级: F");
        }
        
        // 嵌套 if 语句
        int num = 15;
        if (num > 0) {
            System.out.println(num + " 是正数");
            if (num % 2 == 0) {
                System.out.println(num + " 是偶数");
            } else {
                System.out.println(num + " 是奇数");
            }
        }
    }
}