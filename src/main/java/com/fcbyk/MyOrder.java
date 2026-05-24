package com.fcbyk;

// 如果不在xml配置生命周期对应的函数，也可以通过类实现InitializingBean与DisposableBean接口
import org.springframework.beans.factory.DisposableBean;
import org.springframework.beans.factory.InitializingBean;

public class MyOrder implements InitializingBean, DisposableBean {

    public MyOrder() {
        System.out.println("1 订单对象已被创建");
    }

    public void test() {
        System.out.println("测试方法执行");
    }

    // Spring容器关闭时执行，Bean销毁
    @Override
    public void destroy() throws Exception {
        System.out.println("3 订单bean销毁");
    }

    // 属性注入完成后执行，Bean初始化
    @Override
    public void afterPropertiesSet() throws Exception {
        System.out.println("2 订单bean初始化");
    }
}