package com.fcbyk;

import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

public class App {

    // 管理第三方bean
    public static void main(String arg[]){
        ApplicationContext ctx = new ClassPathXmlApplicationContext("applicationContext.xml");
        
        Student student = (Student) ctx.getBean("student");
        student.test();
    }
}
