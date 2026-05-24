#include <stdio.h>
#define PI 3.1415   //定义符号常量
#define E 2.71

/**
 * 常量与变量
 */
int main(){

    // 变量包括声明和赋值（初始化）两部分
    int a = 10;
    printf("%d\n",a);

    /**
     * 常量的定义有两种
     * 1、预处理中用#define指令定义符号常量
     * 2、使用const关键字定义常变量,常变量不能被重新赋值
     */
    const int y = 2022;
    printf("%d\n",y);
    printf("%f\n",PI);

    return 0;
}