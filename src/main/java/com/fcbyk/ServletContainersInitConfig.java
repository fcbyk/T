package com.fcbyk;

import org.springframework.web.context.WebApplicationContext;
import org.springframework.web.context.support.AnnotationConfigWebApplicationContext;
import org.springframework.web.servlet.support.AbstractDispatcherServletInitializer;


/**
 * Spring MVC 的入口配置类，替代了传统的 web.xml
 * 初始化 Spring MVC 容器
 * 注册 DispatcherServlet（前端控制器）
 * 配置请求映射路径
 * 浏览器请求 → Tomcat → ServletContainersInitConfig → DispatcherServlet → Controller
 */
public class ServletContainersInitConfig extends AbstractDispatcherServletInitializer {

    //加载springmvc配置类
    protected WebApplicationContext createServletApplicationContext() {
        //初始化WebApplicationContext对象
        AnnotationConfigWebApplicationContext ctx = new AnnotationConfigWebApplicationContext();
        //加载指定配置类
        ctx.register(SpringMvcConfig.class);
        return ctx;
    }

    //设置由springmvc控制器处理的请求映射路径
    protected String[] getServletMappings() {
        return new String[]{"/"};
    }

    //加载spring配置类
    protected WebApplicationContext createRootApplicationContext() {
        return null;
    }
}
