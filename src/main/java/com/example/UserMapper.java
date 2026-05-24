package com.example;

import org.apache.ibatis.annotations.*;
import java.util.List;

/**
 * 定义 Mapper 接口（纯注解版本）
 */
public interface UserMapper {
    @Select("SELECT id, name, email, created_at FROM users")
    List<User> selectAllUsers();
    
    @Select("SELECT id, name, email, created_at FROM users WHERE id = #{id}")
    User selectUserById(Integer id);
    
    @Insert("INSERT INTO users (name, email) VALUES (#{name}, #{email})")
    int insertUser(User user);
    
    @Update("UPDATE users SET name = #{name}, email = #{email} WHERE id = #{id}")
    int updateUser(User user);
    
    @Delete("DELETE FROM users WHERE id = #{id}")
    int deleteUser(Integer id);
}
