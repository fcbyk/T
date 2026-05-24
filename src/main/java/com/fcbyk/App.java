package com.fcbyk;

import com.alibaba.druid.pool.DruidDataSource;
import javax.sql.DataSource;
import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

public class App {

    // 管理第三方bean
    public static void main(String arg[]){
        ApplicationContext ctx = new ClassPathXmlApplicationContext("applicationContext.xml");
        // 获取DruidDataSource对象
        DruidDataSource dataSource = (DruidDataSource) ctx.getBean("dataSource");
        
        System.out.println("===== Druid 连接池配置信息 =====");
        System.out.println("驱动类: " + dataSource.getDriverClassName());
        System.out.println("URL: " + dataSource.getUrl());
        System.out.println("用户名: " + dataSource.getUsername());
        System.out.println("初始连接数: " + dataSource.getInitialSize());
        System.out.println("最大活跃连接数: " + dataSource.getMaxActive());
        System.out.println("最小空闲连接数: " + dataSource.getMinIdle());
        System.out.println("\n===== Druid 运行时状态 =====");
        System.out.println(dataSource);
    }
}
