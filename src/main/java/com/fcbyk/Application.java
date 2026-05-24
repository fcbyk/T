package com.fcbyk;

import org.mybatis.spring.annotation.MapperScan;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.Banner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import java.util.Collections;
import java.util.List;

@SpringBootApplication
@MapperScan("com.fcbyk")
public class Application{

    @Autowired
    private UserMapper userMapper;
    
    public static void main(String[] args) {
        SpringApplication app = new SpringApplication(Application.class);
        // 设置不显示Banner和简化日志输出
        app.setBannerMode(Banner.Mode.OFF);
        app.setDefaultProperties(Collections.singletonMap("logging.level.root", "ERROR"));
        var context = app.run(args);

        // 获取 Application bean 并执行测试
        Application application = context.getBean(Application.class);
        application.testSelect();
    }

    public void testSelect() {
        System.out.println(userMapper.helloWorld());
        List<User> userList = userMapper.selectList(null);
        userList.forEach(System.out::println);
    }
}