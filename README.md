# demo77

## MyBatis 原生执行流程 （不结合Spring）
> 你调接口 → MyBatis 找SQL → 帮你执行 → 把结果变成对象还给你

1. **加载配置，构建核心配置对象**
   解析核心配置文件 `mybatis-config.xml` + 所有 Mapper 映射文件，解析所有 SQL、参数、结果映射规则，**构建全局唯一的 Configuration 对象**。

2. **创建 SqlSessionFactory（单例，全局唯一）**
   基于 Configuration 生成 SqlSessionFactory，它是 MyBatis 的**会话工厂**，作用只有一个：生产 SqlSession。

3. **创建 SqlSession（会话对象）**
   通过 SqlSessionFactory 开启 SqlSession，它是 MyBatis 的**核心操作对象**，内部封装了**执行器（Executor）**和**数据库事务**，一次会话对应一个 SqlSession。

4. **获取 Mapper 接口代理对象**
   调用 `sqlSession.getMapper(XXXMapper.class)`，MyBatis 通过 **JDK 动态代理** 生成 Mapper 接口的代理实例，这是我们实际调用的对象。

5. **调用 Mapper 方法，触发代理拦截**
   执行 Mapper 接口方法时，被 `MapperProxy` 代理类拦截：
   - 将方法解析为 `MapperMethod`
   - 通过 **namespace + 方法名** 精准定位到映射文件中的 `MappedStatement`（封装了完整 SQL 信息）

6. **SQL 底层执行链路（核心）**
   SqlSession 调度执行器 → Executor 核心执行 → StatementHandler 预处理 SQL
   1. `ParameterHandler` 为 SQL 设置参数
   2. 调用原生 JDBC 执行 SQL
   3. `ResultSetHandler` 将查询结果集自动映射为 Java 对象

7. **返回结果，关闭会话**
   逐层返回结果给调用方，操作完成后关闭 SqlSession 释放资源。

### 总结
1. 配置解析 → 生成 `Configuration` → 构建 `SqlSessionFactory`
2. 会话工厂生产 `SqlSession`，动态代理生成 Mapper 代理对象
3. 调用方法 → 定位 SQL → 四大组件（Executor/StatementHandler/ParameterHandler/ResultSetHandler）协作执行
4. JDBC 执行 → 结果映射 → 返回 Java 对象