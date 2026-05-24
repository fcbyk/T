# demo67

## 1. Servlet 核心概念

Servlet 是 Java EE（现 Jakarta EE）规范中用于处理 Web 请求的核心组件。它运行在 Servlet 容器（如 Tomcat、Jetty）中，负责接收客户端请求并生成响应。

## 2. 两种实现方式对比

在实际开发中，有两种方式创建 Servlet：

### 2.1 实现 `Servlet` 接口（底层方式）

这是最原始的实现方式，需要手动实现接口定义的所有方法。

```java
@WebServlet("/hello")
public class MyServlet implements Servlet {
    // ❌ 必须实现这 5 个方法，即使大部分用不到
    public void init(ServletConfig config) { }
    public ServletConfig getServletConfig() { return null; }
    public String getServletInfo() { return null; }
    public void destroy() { }
    
    // ⚠️ 所有请求都走这里，需要手动判断 GET/POST
    public void service(ServletRequest req, ServletResponse resp) {
        resp.setContentType("text/html");
        PrintWriter out = resp.getWriter();
        out.println("<h1>Hello</h1>");
    }
}
```

**缺点：**
- 必须实现 5 个方法，样板代码多
- 参数是通用的 `ServletRequest`，缺乏 HTTP 特有功能
- 需手动区分请求类型（GET/POST）

---

### 2.2 继承 `HttpServlet` 类（推荐方式 ✅）

`HttpServlet` 是对 `Servlet` 接口的封装，专门针对 HTTP 协议优化。

```java
@WebServlet("/hello")
public class HelloServlet extends HttpServlet {
    // ✅ 只需重写需要的方法
    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse resp) 
            throws ServletException, IOException {
        resp.setContentType("text/html;charset=UTF-8");
        PrintWriter out = resp.getWriter();
        out.println("<h1>Hello Servlet!</h1>");
    }
}
```

**优点：**
- 只需关注业务逻辑（`doGet`、`doPost` 等）
- 参数是 `HttpServletRequest/Response`，提供丰富的 HTTP 方法
- 自动分发请求到对应的处理方法

## 3. 为什么推荐用 `HttpServlet`？

| 特性 | `implements Servlet` | `extends HttpServlet` |
|------|---------------------|----------------------|
| **开发复杂度** | 😫 高 | 😊 低 |
| **代码量** | 多（5个必需方法） | 少（只写需要的） |
| **HTTP 支持** | 通用（无 HTTP 特性） | 专用（完整 HTTP 支持） |
| **实际使用率** | < 1%（仅教学） | > 99%（生产环境） |

**内部原理：**
`HttpServlet` 内部实现了 `Servlet` 接口的 `service()` 方法，并根据请求方法（GET/POST/PUT...）自动调用对应的 `doXxx()` 方法。

---

## 4. Servlet 生命周期

Servlet 的生命周期由容器管理，分为三个阶段：

1. **初始化（init）**
   - 容器首次加载 Servlet 时调用
   - 只执行一次，用于资源初始化（如数据库连接）

2. **服务（service）**
   - 每次请求都会调用
   - `HttpServlet` 会根据请求类型分发到 `doGet()`、`doPost()` 等

3. **销毁（destroy）**
   - 容器关闭或卸载 Servlet 时调用
   - 只执行一次，用于释放资源

---

## 5. 常用注解与配置

### 5.1 @WebServlet 注解

替代传统的 `web.xml` 配置，简化开发：

```java
@WebServlet(urlPatterns = "/hello", loadOnStartup = 1)
public class HelloServlet extends HttpServlet { ... }
```

**等价于 web.xml：**

```xml

<servlet>
   <servlet-name>HelloServlet</servlet-name>
   <servlet-class>dev.fcbyk.HelloServletdev.fcbyk.HelloServlet</servlet-class>
   <load-on-startup>1</load-on-startup>
</servlet>
<servlet-mapping>
<servlet-name>HelloServlet</servlet-name>
<url-pattern>/hello</url-pattern>
</servlet-mapping>
```

### 5.2 常用属性

| 属性 | 说明 | 示例 |
|------|------|------|
| `urlPatterns` | 映射路径 | `"/hello"` |
| `loadOnStartup` | 启动时加载优先级 | `1`（数字越小越优先） |
| `name` | Servlet 名称 | `"MyServlet"` |

## 6. HttpServletRequest & HttpServletResponse

### 6.1 请求对象（HttpServletRequest）

```java
// 获取请求参数
String name = req.getParameter("name");

// 获取请求头
String userAgent = req.getHeader("User-Agent");

// 获取会话
HttpSession session = req.getSession();

// 转发请求
req.getRequestDispatcher("/other").forward(req, resp);
```

### 6.2 响应对象（HttpServletResponse）

```java
// 设置内容类型
resp.setContentType("text/html;charset=UTF-8");

// 获取输出流
PrintWriter out = resp.getWriter();
out.println("<h1>Hello</h1>");

// 重定向
resp.sendRedirect("/login");

// 设置状态码
resp.setStatus(HttpServletResponse.SC_NOT_FOUND);
```

## 7. 总结

- ✅ **实际开发永远使用 `extends HttpServlet`**
- ✅ **使用 `@WebServlet` 注解简化配置**
- ✅ **理解 Servlet 生命周期有助于调试和优化**
- ✅ **掌握 `HttpServletRequest/Response` 的常用方法**

> **提示：** Servlet 是 Java Web 开发的基石，Spring MVC、Struts 等框架都是基于 Servlet 构建的。理解 Servlet 有助于深入理解上层框架的工作原理。
