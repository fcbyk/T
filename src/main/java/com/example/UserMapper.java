package com.example;

import java.util.List;

/**
 * 定义 Mapper 接口
 * MyBatis 会自动生成实现类（动态代理）
 * 你写接口 → MyBatis 自动生成实现类
 * 你调用方法 → MyBatis 代理类拦截 → 去找 SQL → 执行 → 返回
 * 你只负责定义方法，不负责实现
 */
public interface UserMapper {
    
    /**
     * 查询所有用户
     * @return 用户列表
     */
    List<User> selectAllUsers();
    
    /**
     * 根据 ID 查询用户
     * @param id 用户 ID
     * @return 用户对象
     */
    User selectUserById(Integer id);
    
    /**
     * 插入用户
     * @param user 用户对象
     * @return 影响的行数
     */
    int insertUser(User user);
    
    /**
     * 更新用户
     * @param user 用户对象
     * @return 影响的行数
     */
    int updateUser(User user);
    
    /**
     * 删除用户
     * @param id 用户 ID
     * @return 影响的行数
     */
    int deleteUser(Integer id);
}
