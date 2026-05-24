package com.fcbyk;

import com.baomidou.mybatisplus.core.mapper.BaseMapper;
import org.apache.ibatis.annotations.Select;

public interface UserMapper extends BaseMapper<User> {

    // MyBatis-Plus 提供了许多开箱即用的方法

    @Select("SELECT 'Hello, World!'")
    String helloWorld();

    // 如果使用注解和 XML 都无法满足需求，可以手动实现 Mapper 接口的方法。
}