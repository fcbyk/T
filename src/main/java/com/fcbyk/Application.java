package com.fcbyk;

//import org.springframework.boot.Banner;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import java.util.Collections;

@SpringBootApplication
public class Application implements CommandLineRunner {

    public static void main(String[] args) {
        SpringApplication app = new SpringApplication(Application.class);

        // 设置不显示Banner和简化日志输出
        // app.setBannerMode(Banner.Mode.OFF);
        app.setDefaultProperties(Collections.singletonMap("logging.level.root", "ERROR"));

        app.run(args);
    }

    @Override
    public void run(String... args) throws Exception {
        System.out.println(" Web server powered by SpringBoot v3.3");
        System.out.println(" ➜  URL: http://localhost:80/");
    }
}