package com.fcbyk;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/hello")
public class HelloController {

    @GetMapping("/{msg}")
    public String hello(@PathVariable String msg){
        System.out.println("id ==> "+msg);
        return "hello , spring boot!" + msg;
    }
}
