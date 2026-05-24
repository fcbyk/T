package com.fcbyk;

import org.springframework.stereotype.Component;

@Component("tea")
public class Tea {

    public void test() {
        System.out.println("茶test方法执行");
    }
}