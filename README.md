# demo76

## 为什么不需要配置就能找到 index.html？

### 静态资源自动映射

Spring Boot 默认从以下路径查找静态资源：
- `/static`
- `/public`
- `/resources`
- `/META-INF/resources`

当访问 `http://localhost/` 时，Spring MVC 的 `ResourceHttpRequestHandler` 会自动在这些目录下查找 `index.html`。

**底层实现：**
```java
// WebMvcAutoConfiguration 中的配置
classpath:/META-INF/resources/
classpath:/resources/
classpath:/static/
classpath:/public/
```

## Spring Boot vs Spring 核心差异

| 维度 | Spring | Spring Boot |
|------|--------|-------------|
| **配置** | XML/Java Config 手动配置 | 自动配置（@EnableAutoConfiguration） |
| **服务器** | 需部署到外部 Tomcat | 内嵌 Tomcat/Jetty/Undertow |
| **依赖** | 手动管理版本冲突 | Starter 统一依赖管理 |
| **启动** | 复杂初始化流程 | SpringApplication 一键启动 |

## 自动配置原理

### @SpringBootApplication 三重注解

```java
@SpringBootConfiguration  // @Configuration 的变体，标识配置类
@EnableAutoConfiguration  // 启用自动配置
@ComponentScan            // 组件扫描（当前包及子包）
```

### EnableAutoConfiguration 工作机制

1. **读取配置**：从 `META-INF/spring.factories` 加载所有自动配置类
2. **条件判断**：通过 `@Conditional` 注解判断是否满足条件
   - `@ConditionalOnClass`：类路径中存在某个类时才生效
   - `@ConditionalOnMissingBean`：容器中不存在某个 Bean 时才创建
3. **注册 Bean**：满足条件的配置类会被加载到 IOC 容器

**示例：**
```java
@Configuration
@ConditionalOnClass({ Servlet.class, DispatcherServlet.class })
public class WebMvcAutoConfiguration {
    // 只有存在 Servlet 和 DispatcherServlet 时才配置
}
```

## 内嵌服务器原理

### Tomcat 自动启动流程

1. `spring-boot-starter-web` 引入 `spring-boot-starter-tomcat`
2. `ServletWebServerFactoryAutoConfiguration` 检测到 Tomcat 在 classpath
3. 创建 `TomcatServletWebServerFactory`
4. `SpringApplication.run()` 时启动内嵌 Tomcat
5. 监听指定端口（默认 8080）

**关键代码：**
```java
// ServletWebServerApplicationContext
protected void onRefresh() {
    createWebServer(); // 创建并启动 Web 服务器
}
```

## Starter 依赖机制

### Starter 的作用

Starter 是依赖描述的集合，传递性引入相关依赖：

```
spring-boot-starter-web
├── spring-boot-starter
│   ├── spring-boot
│   └── spring-boot-autoconfigure
├── spring-boot-starter-tomcat
├── spring-web
└── spring-webmvc
```

### 自定义 Starter

1. 创建 `xxx-spring-boot-starter` 项目
2. 编写自动配置类 `XxxAutoConfiguration`
3. 在 `META-INF/spring.factories` 中注册：
   ```properties
   org.springframework.boot.autoconfigure.EnableAutoConfiguration=\
     com.example.XxxAutoConfiguration
   ```

## 配置文件加载顺序

Spring Boot 按以下优先级加载配置（高→低）：

1. 命令行参数 `--server.port=9090`
2. JNDI 属性
3. JVM 系统属性 `-Dserver.port=9090`
4. 操作系统环境变量
5. `application-{profile}.properties/yml`
6. `application.properties/yml`
7. `@PropertySource` 注解
8. `SpringApplication.setDefaultProperties()`

## 核心运行流程

```
SpringApplication.run()
    ↓
1. 创建 ApplicationContext
    ↓
2. 准备 Environment（加载配置）
    ↓
3. 创建并刷新 Context
    ├─ 组件扫描（@ComponentScan）
    ├─ 自动配置（@EnableAutoConfiguration）
    └─ 实例化 Bean
    ↓
4. 启动内嵌 Web 服务器
    ↓
5. 执行 CommandLineRunner/ApplicationRunner
    ↓
应用就绪，接收请求
```

## 关键知识点总结

- **约定优于配置**：默认行为覆盖 80% 场景，特殊需求再自定义
- **自动配置**：基于条件注解动态加载配置类，避免冗余 Bean
- **内嵌服务器**：简化部署，打成 jar 包即可运行 `java -jar app.jar`
- **Starter 机制**：模块化依赖管理，避免版本冲突
- **外部化配置**：支持多种配置源，灵活适配不同环境