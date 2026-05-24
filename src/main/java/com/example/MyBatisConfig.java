package com.example;

import org.apache.ibatis.datasource.pooled.PooledDataSource;
import org.apache.ibatis.mapping.Environment;
import org.apache.ibatis.session.Configuration;
import org.apache.ibatis.session.SqlSessionFactory;
import org.apache.ibatis.session.SqlSessionFactoryBuilder;
import org.apache.ibatis.transaction.jdbc.JdbcTransactionFactory;

import javax.sql.DataSource;

/**
 * MyBatis 配置类
 * 纯 Java 配置，替代 mybatis-config.xml
 */
public class MyBatisConfig {
    
    private static SqlSessionFactory sqlSessionFactory;
    
    /**
     * 获取 SqlSessionFactory（单例模式）
     */
    public static SqlSessionFactory getSqlSessionFactory() {
        if (sqlSessionFactory == null) {
            synchronized (MyBatisConfig.class) {
                if (sqlSessionFactory == null) {
                    sqlSessionFactory = createSqlSessionFactory();
                }
            }
        }
        return sqlSessionFactory;
    }
    
    /**
     * 创建 SqlSessionFactory
     */
    private static SqlSessionFactory createSqlSessionFactory() {
        // 1. 创建数据源（使用 MyBatis 内置的 POOLED 连接池）
        DataSource dataSource = createDataSource();
        
        // 2. 创建事务管理器（JDBC 事务）
        JdbcTransactionFactory transactionFactory = new JdbcTransactionFactory();
        
        // 3. 创建环境配置
        Environment environment = new Environment("development", transactionFactory, dataSource);
        
        // 4. 创建 Configuration 对象
        Configuration configuration = new Configuration(environment);
        
        // 5. 注册 Mapper 接口（使用注解方式）
        configuration.addMapper(UserMapper.class);
        
        // 6. 可选：开启驼峰命名自动映射（created_at -> createdAt）
        configuration.setMapUnderscoreToCamelCase(true);
        
        // 7. 构建 SqlSessionFactory
        return new SqlSessionFactoryBuilder().build(configuration);
    }
    
    /**
     * 创建数据源
     */
    private static DataSource createDataSource() {
        PooledDataSource dataSource = new PooledDataSource();
        dataSource.setDriver("com.mysql.cj.jdbc.Driver");
        dataSource.setUrl("jdbc:mysql://localhost:3306/testdb?" +
                "useSSL=false&" +
                "serverTimezone=Asia/Shanghai&" +
                "allowPublicKeyRetrieval=true&" +
                "useUnicode=true&" +
                "characterEncoding=UTF-8&" +
                "connectionCollation=utf8mb4_unicode_ci&" +
                "characterSetResults=UTF-8");
        dataSource.setUsername("user");
        dataSource.setPassword("123456");
        
        // 可选：配置连接池参数
        dataSource.setDefaultAutoCommit(false);
        dataSource.setPoolMaximumActiveConnections(10);
        dataSource.setPoolMaximumIdleConnections(5);
        dataSource.setPoolMaximumCheckoutTime(20000);
        dataSource.setPoolTimeToWait(20000);
        
        return dataSource;
    }
}
