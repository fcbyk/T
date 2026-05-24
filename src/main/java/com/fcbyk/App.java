package com.fcbyk;

import org.junit.jupiter.api.Test;
import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;
import org.springframework.context.support.FileSystemXmlApplicationContext;

public class App {

    // IOC容器的创建方式
    public static ApplicationContext getApplicationContext(int number){
        if(number == 1){
            // 类路径下的XML配置文件
            return new ClassPathXmlApplicationContext("applicationContext.xml");
        }else if(number == 2){
            // 文件系统下的XML配置文件
            // 使用绝对路径或相对于项目根目录的正确路径
            return new FileSystemXmlApplicationContext("src/main/resources/applicationContext.xml");
        }
        return null;
    }

    @Test
    // 获取bean的方式
    public void test1(){
        ApplicationContext ctx = getApplicationContext(2);

        // 通过id从IOC容器获取bean
        Book book1 = (Book)ctx.getBean("book");
        book1.test();

        // 通过别名从容器中获取对象
        Book book2 = (Book)ctx.getBean("book1");
        book2.test();
        Book book3 = (Book)ctx.getBean("book2");
        book3.test();

        // IOC容器里面的bean默认为单例（可以改为非单例）
        // 表现层对象，业务层对象，数据层对象，工具对象适合交给容器进行管理
        // 封装实例的域对象不适合交给容器进行管理，会引发线程安全问题
        System.out.println(book1);
        System.out.println(book2);
        System.out.println(book3);
    }

    @Test
    public void test2(){
        ApplicationContext ctx = getApplicationContext(1);

        // 获取静态工厂实例化的bean
        MyOrder order = (MyOrder) ctx.getBean("myOrder");
        order.test();
    }

    @Test
    // Bean的三种获取方式
    public void test3(){
        ApplicationContext ctx = getApplicationContext(1);

        // 方式一 这种方式存在的问题是每次获取的时候都需要进行类型转换
        Book book4 = (Book)ctx.getBean("book");
        book4.test();

        // 方式二 这种方式可以解决类型强转问题，但是参数又多加了一个
        Book book5 = ctx.getBean("book",Book.class);
        book5.test();

        // 方式三 这种方式就类似我们依赖注入中的按类型注入。必须要确保IOC容器中该类型对应的bean对象只能有一个
        Book book6 = ctx.getBean(Book.class);
        book6.test();
    }

    @Test
    // Bean的生命周期
    public void test4(){
        // ApplicationContext中没有close方法
        // 需要将ApplicationContext更换成ClassPathXmlApplicationContext
        ClassPathXmlApplicationContext ctx = new ClassPathXmlApplicationContext("applicationContext.xml");

        Book book = (Book)ctx.getBean("book");
        book.test();
        MyOrder order = (MyOrder) ctx.getBean("myOrder");
        order.test();

        ctx.close();
    }
}
