package com.fcbyk;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.PropertySource;
import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Component;

@Component

@Scope("prototype")
// 等于xml配置的<bean scope="prototype"/>
// @Scope设置bean的作用范围（单例和非单例）

@PropertySource("jdbc.properties")
public class BeanA {

    @Autowired
    // 按照类型自动注入
    private Tea tea;

    @Value("中国移动")
    // 注入简单类型数据
    private String name;

    @Value("10086")
    private int phone;

    @Value("${jdbc.password}")
    // 读取配置文件中的内容
    private String password;

    @Value("${jdbc.url}")
    private String url;

    @Bean("mybook")
    // 设置该方法的返回值作为spring管理的bean
    // 代替了xml配置里的工厂函数属性
    public Book getBook(){
        return new Book("三国");
    }

    public void test() {
        System.out.println("学生test方法执行");
        this.tea.test();
        System.out.println(this.name);
        System.out.println(this.phone);
        System.out.println(this.url);
        System.out.println(this.password);
    }

}