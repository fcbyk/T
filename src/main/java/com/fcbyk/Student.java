package com.fcbyk;

import jakarta.annotation.PostConstruct;
import jakarta.annotation.PreDestroy;
import org.springframework.stereotype.Component;


/**
 * 等于xml配置的 <bean id="student" class="当前类"/>
 * 对于@Component注解，还衍生出了其他三个注解@Controller、@Service、@Repository
 * 这三个注解和@Component注解的作用是一样的，方便我们后期在编写类的时候能很好的区分出这个类是属于表现层、业务层还是数据层的类
 * @Component 注解不可以添加在接口上，因为接口是无法创建对象的
 * @Component 注解如果不起名称，会有一个默认值就是当前类名首字母小写，所以也可以按照名称获取
 */
@Component("student")
public class Student {

    public void test() {
        System.out.println("学生test方法执行");
    }

    @PostConstruct
    // 生命周期方法，表示bean初始化对应的操作
    public void init(){
        System.out.println("学生bean初始化");
    }

    @PreDestroy
    // 生命周期方法，表示bean销毁前对应的操作
    public void destroy(){
        System.out.println("学生bean销毁");
    }
}