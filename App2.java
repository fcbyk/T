import java.util.HashMap;
import java.util.Map;

class App2 {
    public static void main(String[] args) {
        Map<String, Integer> studentMap = new HashMap<>();

        studentMap.put("Alice", 101);
        studentMap.put("Bob", 102);
        studentMap.put("Charlie", 103);

        Integer num = studentMap.get("Bob");

        boolean containsKey = studentMap.containsKey("Alice");
        boolean containsValue = studentMap.containsValue(104);

        studentMap.remove("Charlie");

        System.out.println(studentMap);

        for (Map.Entry<String, Integer> entry : studentMap.entrySet()) {
            System.out.println("姓名：" + entry.getKey() + "，学号：" + entry.getValue());
        }

        studentMap.clear();
        System.out.println("清空后：" + studentMap);
    }
}