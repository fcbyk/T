package com.fcbyk;

public class Book {

    private String name;

    public Book() {
        System.out.println("图书对象已被创建");
    }

    public Book(String name) {
        this.name = name;
    }

    public String getName() {
        return name;
    }

    public void test() {
        System.out.println("图书test方法执行");
    }
}