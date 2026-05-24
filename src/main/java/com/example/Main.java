package com.example;

import org.apache.ibatis.io.Resources;
import org.apache.ibatis.session.SqlSession;
import org.apache.ibatis.session.SqlSessionFactory;
import org.apache.ibatis.session.SqlSessionFactoryBuilder;

import java.io.IOException;
import java.io.InputStream;

import java.io.PrintStream;
import java.nio.charset.StandardCharsets;
import java.util.List;


public class Main {

    public static SqlSessionFactory getFactory() throws IOException{
        // 加载 mybatis的核心配置文件
        InputStream inputStream = Resources.getResourceAsStream("mybatis-config.xml");
        // 构建 SqlSessionFactory 并return出去
        return new SqlSessionFactoryBuilder().build(inputStream);
    }

    public static void main(String[] args) throws IOException {

        // 获取SqlSession对象，用它来执行sql
        SqlSession sqlSession = getFactory().openSession();

        // 获取Mapper接口的动态代理对象（MyBatis自动生成接口实现类）
        UserMapper mapper = sqlSession.getMapper(UserMapper.class);

        // 调用Mapper方法，执行SQL查询所有用户
        List<User> users = mapper.selectAllUsers();

        for (User user : users) {
            System.out.println(user);
        }

        System.out.println("共查询到 " + users.size() + " 条记录\n");

        // 关闭会话
        sqlSession.close();
    }
}
