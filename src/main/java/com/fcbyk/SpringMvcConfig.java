package com.fcbyk;

import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.EnableWebMvc;

@Configuration
@ComponentScan("com.fcbyk")
@EnableWebMvc  // 启用 Spring MVC 默认配置
public class SpringMvcConfig {
    // mvc配置类
}