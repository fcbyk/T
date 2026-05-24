# demo79

## 🔑 核心要素详解

### 1. **SpringApplication.run() - 为什么必须调用？**

#### 代码位置
[Application.java](file://e:/hello-world/demo89/src/main/java/com/fcbyk/Application.java#L18-L25)

```java
public static void main(String[] args) {
    SpringApplication app = new SpringApplication(Application.class);
    var context = app.run(args);  // ← 这一步是必须的
    
    // 获取 Application bean 并执行测试
    Application application = context.getBean(Application.class);
    application.testSelect();
}
```

#### 为什么必须调用 `run()`？

**`app.run(args)` 是 Spring Boot 应用启动的核心步骤**，它完成了以下关键工作：

1. **创建 Spring 应用上下文（ApplicationContext）**
   - 初始化 Bean 工厂
   - 扫描并注册所有 Bean 定义

2. **实例化所有 Bean**
   - 创建 `UserMapper`、`DataSource` 等组件
   - 执行 Bean 的生命周期回调

3. **完成依赖注入**
   - 处理 `@Autowired` 注解
   - 将 `UserMapper` 注入到 `Application` 类中

4. **启动内嵌 Web 服务器**（如果使用 spring-boot-starter-web）

**如果不先调用 `run()`：**
- Spring 容器未启动，Bean 未被创建
- `@Autowired` 注入的 `userMapper` 会是 `null`
- 调用 `testSelect()` 会抛出 `NullPointerException`

**执行顺序：**
```
创建 SpringApplication → run() 启动容器 → Bean 初始化 → 依赖注入完成 → 可以安全使用 Bean
```

---

### 2. **@TableName - 为什么要指定表名？**

#### 代码位置
[User.java](file://e:/hello-world/demo89/src/main/java/com/fcbyk/User.java#L11)

```java
@Data
@TableName("`users`")  // ← 指定数据库表名
public class User {
    private Integer id;
    private String name;
    private String email;
    private LocalDateTime createdAt;
}
```

#### 为什么需要 `@TableName`？

**MyBatis-Plus 默认使用类名作为表名**，但有以下情况需要显式指定：

1. **类名与表名不一致**
   - Java 类名：`User`
   - 数据库表名：`users`（复数形式）
   - 需要映射关系

2. **表名包含特殊字符或关键字**
   - 使用反引号 `` `users` `` 包裹，避免 SQL 语法错误
   - 某些数据库保留字需要转义

3. **明确映射关系，提高代码可读性**
   - 一眼就能看出实体类对应哪个表

**如果不写 `@TableName`：**
- MyBatis-Plus 会尝试查找名为 `user` 的表（类名小写）
- 如果实际表名是 `users`，会报错：`Table 'testdb.user' doesn't exist`

**常见命名策略：**
```java
// 策略1：默认（类名小写）
@TableName  // 对应表名: user

// 策略2：显式指定
@TableName("users")  // 对应表名: users

// 策略3：带反引号（推荐用于特殊表名）
@TableName("`users`")  // 对应表名: users（转义）
```

---

### 3. **@MapperScan - Mapper 扫描机制详解**

#### 代码位置
[Application.java](file://e:/hello-world/demo89/src/main/java/com/fcbyk/Application.java#L12)

```java
@SpringBootApplication
@MapperScan("com.fcbyk")  // ← 扫描 Mapper 接口
public class Application {
    // ...
}
```

#### @MapperScan 是如何扫描的？

**扫描机制：**

`@MapperScan` **不是按特定名字查找**，而是通过以下方式识别 Mapper 接口：

1. **包扫描（Package Scanning）**
   ```java
   @MapperScan("com.fcbyk")  // 扫描 com.fcbyk 包及其子包
   @MapperScan({"com.fcbyk.mapper", "com.fcbyk.dao"})  // 扫描多个包
   ```
   - 递归扫描指定包下的所有 `.class` 文件
   - 检查每个类是否是**接口**（interface）

2. **类型匹配（Type Matching）**
   - 检查接口是否继承自 `BaseMapper` 或其他 Mapper 父接口
   - 或者检查接口是否有 `@Mapper` 注解

3. **过滤条件**
   ```java
   @MapperScan(
       basePackages = "com.fcbyk",
       annotationClass = Mapper.class,  // 只扫描带 @Mapper 注解的接口
       markerInterface = BaseMapper.class  // 或只扫描继承 BaseMapper 的接口
   )
   ```

**扫描流程：**
```
@MapperScan("com.fcbyk")
    ↓
扫描 com.fcbyk 包及所有子包
    ↓
找到所有 .class 文件
    ↓
过滤出接口类型（interface）
    ↓
检查是否满足条件：
  ├─ 继承 BaseMapper<T>
  ├─ 或有 @Mapper 注解
  └─ 或符合自定义过滤规则
    ↓
为符合条件的接口创建动态代理
    ↓
注册为 Spring Bean（BeanName: 首字母小写的接口名）
    ↓
UserMapper → bean 名称: "userMapper"
```

**实际示例：**

假设有以下结构：
```
com.fcbyk/
├── UserMapper.java          ← 继承 BaseMapper，会被扫描
├── OrderMapper.java         ← 继承 BaseMapper，会被扫描
├── UserService.java         ← 普通类，不会被扫描
└── mapper/
    └── ProductMapper.java   ← 子包中的 Mapper，也会被扫描
```

```java
@MapperScan("com.fcbyk")
// 会扫描到：UserMapper、OrderMapper、ProductMapper
// 不会扫描：UserService（不是接口）
```

#### Bean 命名规则

扫描到的 Mapper 接口会自动注册为 Spring Bean，**Bean 名称默认是接口名的首字母小写**：

```java
public interface UserMapper extends BaseMapper<User> { }
// → Bean 名称: "userMapper"

public interface OrderMapper extends BaseMapper<Order> { }
// → Bean 名称: "orderMapper"
```

可以通过 `@Component` 或 `@Named` 自定义 Bean 名称：
```java
@Mapper
@Component("customUserMapper")
public interface UserMapper extends BaseMapper<User> { }
```

#### 为什么需要 @MapperScan？

**MyBatis-Plus 需要知道哪些接口是 Mapper**，才能为它们生成代理实现。

**作用：**
1. **自动扫描指定包下的 Mapper 接口**
   - 找到 `UserMapper` 接口
   - 为其创建动态代理对象

2. **注册为 Spring Bean**
   - 使 `UserMapper` 可以被 `@Autowired` 注入
   - 无需手动配置每个 Mapper

**如果不写 @MapperScan：**
- `UserMapper` 不会被注册为 Bean
- `@Autowired UserMapper userMapper` 注入失败
- 报错：`NoSuchBeanDefinitionException`

**替代方案：**
```java
// 方案1：在每个 Mapper 接口上加 @Mapper 注解（逐个声明）
@Mapper
public interface UserMapper extends BaseMapper<User> { }

@Mapper
public interface OrderMapper extends BaseMapper<Order> { }

// 方案2：在启动类上加 @MapperScan（推荐，批量扫描）
@MapperScan("com.fcbyk")
public class Application { }
```

**两种方案对比：**

| 特性 | @Mapper（逐个） | @MapperScan（批量） |
|------|----------------|-------------------|
| 使用方式 | 每个接口加注解 | 启动类加一次注解 |
| 适用场景 | Mapper 数量少 | Mapper 数量多 |
| 维护成本 | 高（需手动添加） | 低（自动扫描） |
| 推荐程度 | ⭐⭐ | ⭐⭐⭐⭐⭐ |

---

### 4. **BaseMapper - 为什么继承它？**

#### 代码位置
[UserMapper.java](file://e:/hello-world/demo89/src/main/java/com/fcbyk/UserMapper.java#L6)

```java
public interface UserMapper extends BaseMapper<User> {
    // MyBatis-Plus 提供了许多开箱即用的方法
}
```

#### 为什么继承 `BaseMapper<User>`？

**`BaseMapper` 是 MyBatis-Plus 提供的通用 Mapper 接口**，包含了常用的 CRUD 方法。

**继承后自动获得的方法：**
```java
// 插入
int insert(T entity);

// 删除
int deleteById(Serializable id);
int delete(Wrapper<T> wrapper);

// 更新
int updateById(T entity);
int update(T entity, Wrapper<T> wrapper);

// 查询
T selectById(Serializable id);
List<T> selectList(Wrapper<T> wrapper);
T selectOne(Wrapper<T> wrapper);
long selectCount(Wrapper<T> wrapper);
// ... 更多方法
```

**好处：**
1. **零 SQL 编写**：常用操作无需写 SQL
2. **类型安全**：泛型 `<User>` 确保返回正确的类型
3. **代码简洁**：一行代码完成查询
   ```java
   List<User> users = userMapper.selectList(null);  // 查询所有用户
   ```

**如果不继承 `BaseMapper`：**
- 需要手动编写所有 SQL 语句
- 失去 MyBatis-Plus 的核心优势

---

### 5. **@Data - 为什么要用 Lombok？**

#### 代码位置
[User.java](file://e:/hello-world/demo89/src/main/java/com/fcbyk/User.java#L10)

```java
@Data  // ← Lombok 注解
@TableName("`users`")
public class User {
    private Integer id;
    private String name;
    private String email;
    private LocalDateTime createdAt;
}
```

#### 为什么需要 `@Data`？

**`@Data` 是 Lombok 提供的注解**，自动生成以下方法：
- `getter/setter` 方法
- `toString()` 方法
- `equals()` 和 `hashCode()` 方法

**等价于手动编写：**
```java
public class User {
    private Integer id;
    
    public Integer getId() { return id; }
    public void setId(Integer id) { this.id = id; }
    
    // ... 其他字段的 getter/setter
    
    @Override
    public String toString() { /* ... */ }
    
    @Override
    public boolean equals(Object o) { /* ... */ }
    
    @Override
    public int hashCode() { /* ... */ }
}
```

**好处：**
1. **代码简洁**：减少 80% 的样板代码
2. **易于维护**：添加字段时无需手动更新 getter/setter
3. **避免错误**：自动生成，不会遗漏或写错

**如果不使用 `@Data`：**
- MyBatis-Plus 无法通过反射访问字段
- 需要手动编写所有 getter/setter
- 代码冗长且易出错

---

## ⚙️ 工作原理

### 整体架构流程

```
┌─────────────────────────────────────────────────┐
│              Spring Boot 启动                     │
│  1. SpringApplication.run()                      │
│  2. 创建 ApplicationContext                      │
│  3. 扫描并注册 Bean                              │
└────────────────┬────────────────────────────────┘
                 │
                 ▼
┌─────────────────────────────────────────────────┐
│           MyBatis-Plus 初始化                     │
│  1. @MapperScan 扫描 Mapper 接口                 │
│  2. 为 UserMapper 创建动态代理                   │
│  3. 注入 DataSource 配置                         │
└────────────────┬────────────────────────────────┘
                 │
                 ▼
┌─────────────────────────────────────────────────┐
│            依赖注入完成                           │
│  @Autowired UserMapper userMapper                │
│  → 注入 MyBatis-Plus 生成的代理对象               │
└────────────────┬────────────────────────────────┘
                 │
                 ▼
┌─────────────────────────────────────────────────┐
│            执行业务逻辑                           │
│  userMapper.selectList(null)                     │
│  → MyBatis-Plus 自动生成 SQL                     │
│  → 执行查询并返回结果                             │
└─────────────────────────────────────────────────┘
```

### 详细工作流程

#### 步骤 1：应用启动
```java
SpringApplication.run(Application.class, args);
```
- 创建 Spring 容器
- 扫描 `@Component`、`@Service`、`@Mapper` 等注解
- 初始化所有 Bean

#### 步骤 2：Mapper 代理创建
```java
@MapperScan("com.fcbyk")
```
- MyBatis-Plus 扫描 `com.fcbyk` 包
- 发现 `UserMapper` 接口
- 使用 JDK 动态代理创建实现类
- 注册为 Spring Bean

#### 步骤 3：依赖注入
```java
@Autowired
private UserMapper userMapper;
```
- Spring 从容器中查找 `UserMapper` Bean
- 将代理对象注入到 `Application` 类

#### 步骤 4：执行查询
```java
List<User> userList = userMapper.selectList(null);
```
- 调用代理对象的 `selectList` 方法
- MyBatis-Plus 根据 `@TableName` 和字段信息生成 SQL：
  ```sql
  SELECT id, name, email, created_at FROM users
  ```
- 通过 JDBC 执行 SQL
- 将结果集映射为 `User` 对象列表
- 返回结果

---

## 🚀 快速开始

### 1. 启动 MySQL 数据库

```bash
docker-compose up -d
```

这会自动：
- 创建 MySQL 容器
- 创建 `testdb` 数据库
- 执行 `init.sql` 初始化表和數據

### 2. 配置数据库连接

编辑 `src/main/resources/application.properties`：

```properties
spring.datasource.url=jdbc:mysql://localhost:3306/testdb?useSSL=false&serverTimezone=UTC
spring.datasource.username=user
spring.datasource.password=123456
spring.datasource.driver-class-name=com.mysql.cj.jdbc.Driver
```

### 3. 运行项目

```bash
mvn spring-boot:run
```

或直接运行 `Application.java` 的 `main` 方法。

### 4. 查看输出

控制台会打印查询到的用户列表：
```
User(id=1, name=张三, email=zhangsan@example.com, createdAt=2024-01-01T00:00:00)
User(id=2, name=李四, email=lisi@example.com, createdAt=2024-01-01T00:00:00)
User(id=3, name=王五, email=wangwu@example.com, createdAt=2024-01-01T00:00:00)
```

---

## 📦 依赖说明

### 核心依赖

| 依赖 | 版本 | 作用 |
|------|------|------|
| `spring-boot-starter-web` | 3.3.0 | Spring Boot Web 支持 |
| `mybatis-plus-spring-boot3-starter` | 3.5.9 | MyBatis-Plus 核心功能 |
| `lombok` | - | 简化 Java 代码 |
| `mysql-connector-j` | - | MySQL JDBC 驱动（由 MyBatis-Plus 引入） |

### 为什么选择这些依赖？

1. **mybatis-plus-spring-boot3-starter**
   - 专为 Spring Boot 3 设计
   - 自动配置 MyBatis-Plus
   - 无需手动配置 SqlSessionFactory

2. **lombok**
   - 减少样板代码
   - 提高开发效率

3. **spring-boot-starter-test**
   - 提供 JUnit、Mockito 等测试工具
   - 便于编写单元测试

---

## ❓ 常见问题

### Q1: 为什么不直接在 main 方法中写测试代码？

**A:** 
- `main` 方法是静态的，不能直接访问非静态成员
- `@Autowired` 注入需要在 Spring 容器启动后才能生效
- 正确做法是先 `run()` 启动容器，再从上下文获取 Bean

### Q2: `@TableName` 中的反引号必须吗？

**A:** 
- 如果表名不是关键字，可以不用反引号
- 使用反引号是良好的实践，避免潜在的 SQL 语法问题
- 例如：`` @TableName("`order`") `` 比 `@TableName("order")` 更安全

### Q3: 可以不继承 `BaseMapper` 吗？

**A:** 
- 可以，但需要手动编写所有 SQL
- 失去 MyBatis-Plus 的核心优势
- 适合有特殊需求的场景

### Q4: 为什么需要 `@MapperScan`？

**A:** 
- MyBatis-Plus 需要知道哪些接口是 Mapper
- 为它们创建动态代理
- 注册为 Spring Bean 以便注入

---

## 📚 学习资源

- [MyBatis-Plus 官方文档](https://baomidou.com/)
- [Spring Boot 官方文档](https://spring.io/projects/spring-boot)
- [Lombok 官方文档](https://projectlombok.org/)
