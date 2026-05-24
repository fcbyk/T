package com.fcbyk;

import com.baomidou.mybatisplus.annotation.TableName;
import lombok.Data;
import java.time.LocalDateTime;

/**
 * 用户实体类
 */
@Data
@TableName("`users`")
public class User {
    private Integer id;
    private String name;
    private String email;
    private LocalDateTime createdAt;
}