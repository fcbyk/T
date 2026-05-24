package com.example;

import java.time.LocalDateTime;

/**
 * 用户实体类
 * 对应数据库中的 users 表
 * 实体类就是 MyBatis 用来封装数据库查询结果的「容器」
 * MyBatis 动态代理生成的代理对象执行完 SQL，拿到 JDBC 结果集
 * 自动把每行数据映射、包装到你的实体类对象里。
 */
public class User {
    private Integer id;
    private String name;
    private String email;
    private LocalDateTime createdAt;

    // 必须无参构造方法
    public User() {
    }

    // 全参构造方法
    public User(Integer id, String name, String email, LocalDateTime createdAt) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.createdAt = createdAt;
    }

    // 必须提供 Getter 和 Setter 方法
    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public LocalDateTime getCreatedAt() {
        return createdAt;
    }

    public void setCreatedAt(LocalDateTime createdAt) {
        this.createdAt = createdAt;
    }

    @Override
    public String toString() {
        return "User{" +
                "id=" + id +
                ", name='" + name + '\'' +
                ", email='" + email + '\'' +
                ", createdAt=" + createdAt +
                '}';
    }
}
