import java.util.ArrayList;

class App1 {
    public static void main(String[] args) {
        ArrayList<String> list = new ArrayList<>();

        list.add("Apple");
        list.add("Banana");
        list.add("Cherry");
        list.set(1, "Blueberry");
        list.remove("Cherry");
        String one = list.get(1);
        Boolean hasOne = list.contains("Blueberry");

        for (String item : list)
            list.set(list.indexOf(item), item + "s" );

        System.out.println(list);
    }
}