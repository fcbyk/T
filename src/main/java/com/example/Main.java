package com.example;

import org.apache.ibatis.session.SqlSession;

import java.time.LocalDateTime;
import java.util.List;


public class Main {

    public static void main(String[] args) {

        // 获取SqlSession对象，用它来执行sql
        SqlSession sqlSession = MyBatisConfig.getSqlSessionFactory().openSession();

        try {
            // 获取Mapper接口的动态代理对象（MyBatis自动生成接口实现类）
            UserMapper mapper = sqlSession.getMapper(UserMapper.class);

            System.out.println("=== 1. 查询所有用户 ===");
            // 调用Mapper方法，执行SQL查询所有用户
            List<User> users = mapper.selectAllUsers();
            for (User user : users) {
                System.out.println(user);
            }
            System.out.println("共查询到 " + users.size() + " 条记录\n");

            System.out.println("=== 2. 根据ID查询用户 ===");
            if (!users.isEmpty()) {
                User user = mapper.selectUserById(users.get(0).getId());
                System.out.println("查询ID为 " + user.getId() + " 的用户: " + user + "\n");
            }

            System.out.println("=== 3. 插入用户 ===");
            User newUser = new User(null, "张三", "zhangsan@example.com", LocalDateTime.now());
            int insertCount = mapper.insertUser(newUser);
            System.out.println("插入了 " + insertCount + " 条记录\n");

            // 重新查询以显示新插入的用户
            users = mapper.selectAllUsers();
            System.out.println("插入后所有用户:");
            for (User user : users) {
                System.out.println(user);
            }
            System.out.println();

            System.out.println("=== 4. 更新用户 ===");
            if (!users.isEmpty()) {
                User userToUpdate = users.get(users.size() - 1);
                userToUpdate.setName("李四");
                userToUpdate.setEmail("lisi@example.com");
                int updateCount = mapper.updateUser(userToUpdate);
                System.out.println("更新了 " + updateCount + " 条记录");
                System.out.println("更新后的用户: " + mapper.selectUserById(userToUpdate.getId()) + "\n");
            }

            System.out.println("=== 5. 删除用户 ===");
            if (!users.isEmpty()) {
                User userToDelete = users.get(users.size() - 1);
                int deleteCount = mapper.deleteUser(userToDelete.getId());
                System.out.println("删除了 " + deleteCount + " 条记录\n");
            }

            System.out.println("=== 6. 删除后查询所有用户 ===");
            users = mapper.selectAllUsers();
            for (User user : users) {
                System.out.println(user);
            }
            System.out.println("共查询到 " + users.size() + " 条记录\n");

            // 提交事务
            sqlSession.commit();
        } catch (Exception e) {
            // 发生异常时回滚事务
            sqlSession.rollback();
            e.printStackTrace();
        } finally {
            // 关闭会话
            sqlSession.close();
        }
    }
}
