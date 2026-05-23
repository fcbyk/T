class App2 {
    // switch 选择语句
    public static void main(String[] args){
        System.out.println("===== switch 选择语句 =====");
        
        // 基本 switch 语句
        int day = 3;
        String dayName;
        switch (day) {
            case 1:
                dayName = "星期一";
                break;
            case 2:
                dayName = "星期二";
                break;
            case 3:
                dayName = "星期三";
                break;
            case 4:
                dayName = "星期四";
                break;
            case 5:
                dayName = "星期五";
                break;
            case 6:
                dayName = "星期六";
                break;
            case 7:
                dayName = "星期日";
                break;
            default:
                dayName = "无效的天数";
                break;
        }
        System.out.println("第 " + day + " 天是: " + dayName);
        
        // switch 穿透示例（没有break）
        System.out.println("\n===== switch 穿透示例 =====");
        int month = 3;
        switch (month) {
            case 12:
            case 1:
            case 2:
                System.out.println(month + "月 - 冬季");
                break;
            case 3:
            case 4:
            case 5:
                System.out.println(month + "月 - 春季");
                break;
            case 6:
            case 7:
            case 8:
                System.out.println(month + "月 - 夏季");
                break;
            case 9:
            case 10:
            case 11:
                System.out.println(month + "月 - 秋季");
                break;
            default:
                System.out.println("无效的月份");
                break;
        }
        
        // Java 14+ switch 表达式
        System.out.println("\n===== switch 表达式 =====");
        String fruit = "apple";
        String result = switch (fruit) {
            case "apple", "orange" -> "水果";
            case "carrot", "broccoli" -> "蔬菜";
            default -> "未知";
        };
        System.out.println(fruit + " 属于: " + result);
    }
}