package com.fcbyk;

import org.junit.jupiter.api.Test;
import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

public class App {

    @Test
    public void test1(){
        ApplicationContext ctx = new ClassPathXmlApplicationContext("applicationContext.xml");
        BeanA bean = ctx.getBean(BeanA.class);
        bean.showConstructorDI();
        bean.showSetterDI();
        bean.showSetterArraysDI();
    }
}
