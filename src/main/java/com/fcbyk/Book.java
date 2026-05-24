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

    // 生命周期方法，表示bean初始化对应的操作
    public void init(){
        System.out.println("图书bean初始化");
    }

    // 生命周期方法，表示bean销毁前对应的操作
    public void destroy(){
        System.out.println("图书bean销毁");
    }
}