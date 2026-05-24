package dev.fcbyk;

import jakarta.servlet.ServletException;
import jakarta.servlet.annotation.WebServlet;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.io.PrintWriter;

// 使用注解配置 Servlet 映射路径
@WebServlet("/hello")
public class HelloServlet extends HttpServlet {

    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse resp) 
            throws ServletException, IOException {
        
        // 设置响应内容类型
        resp.setContentType("text/html;charset=UTF-8");
        
        // 获取输出流
        PrintWriter out = resp.getWriter();
        
        // 输出 HTML
        out.println("<!DOCTYPE html>");
        out.println("<html>");
        out.println("<head><title>Servlet Hello World</title></head>");
        out.println("<body>");
        out.println("<h1>Hello Servlet!</h1>");
        out.println("<p>这是纯 Servlet 的 Hello World</p>");
        out.println("</body>");
        out.println("</html>");
        
        out.flush();
    }
}
