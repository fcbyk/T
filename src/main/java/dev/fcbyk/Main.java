package dev.fcbyk;

import java.sql.*;

public class Main {

    /**
     * 获取连接
     * 如果连接的是本机mysql并且端口是默认的 3306 可以简化书写
     */
    public static Connection getconn() throws SQLException {
        return DriverManager.getConnection(
                "jdbc:mysql:///testdb?useSSL=false",
                "root",
                "123456"
        );
    }

    public static void main(String[] args) throws SQLException {
        // 获取连接对象
        Connection conn = getconn();

        // 获取执行sql的对象 Statement
        Statement stmt = conn.createStatement();

        // 执行sql
        ResultSet rs = stmt.executeQuery("select * from users");

        // 处理结果， 遍历rs中的所有数据
        // 光标向下移动一行，并且判断当前行是否有数据
        while (rs.next()) {
            // 获取与打印数据  getXxx()
            System.out.print(rs.getInt("id") + "\t");
            System.out.print(rs.getString("name") + "\t");
            System.out.print(rs.getString("email") + "\n");
        }

        // 释放资源
        rs.close();
        stmt.close();
        conn.close();
    }
}
