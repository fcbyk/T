package com.fcbyk;

import org.springframework.context.ApplicationContext;
import org.springframework.context.annotation.AnnotationConfigApplicationContext;

public class App {

    public static void main(String arg[]){
        /**
         * 通过配置类生成的容器，无法使用xml里的bean
         * 因为ComponentScan扫描不了xml里的包
         * 注入时会可能出现不存在bean等错误
         */
        ApplicationContext ctx = new AnnotationConfigApplicationContext(SpringConfig.class);

        BeanA beanA = (BeanA) ctx.getBean("beanA");
        beanA.test();
        Book sanguo = (Book) ctx.getBean("mybook");
        System.out.println(sanguo.getName());
    }
}
