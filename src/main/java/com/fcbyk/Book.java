package com.fcbyk;

public class Book {

    // 私有构造方法
    private Book() {
        System.out.println("图书对象已被创建");
    }

    // 测试方法
    public void test() {
        System.out.println("图书test方法执行");
    }

}