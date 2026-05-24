package com.fcbyk;

public class MyOrderFactory{

    public MyOrderFactory(){
        System.out.println("订单工厂对象被创建");
    }

    public static MyOrder getOrder(){
        // 静态方法不会执行上面的构造函数
        return new MyOrder();
    }
}