#include <stdio.h>

/**
 * 枚举
 * 如果一个变量只有几种可能的值，则可以定义为"枚举类型"
 * 所谓"枚举"就是把可能的值一一的列举出来，变量的值只限于列举出来的值的范围
 */
enum Spectrum{
    // 枚举成员列表(以逗号分隔)
    red,black,yellow,blue,white
}i1;

int main(){
    i1 = black;

    switch (i1)
    {
        case red:printf("red\n");break;
        case black:printf("black\n");break;
        case yellow:printf("yellow\n");break;
        default:printf("blue\n");
    }
    
    return 0;
}