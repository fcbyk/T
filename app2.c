#include <stdio.h>  

// 基本数据类型
int main(){

    // 整型
    short a1=32767;
    int a2=2147483647;
    long a3=2147483647;

    // 下面三行代码和上面三行代码时执行效果是一样的
    // signed关键字修饰，表示有符号数，默认为有符号数，所以可以不用加signed
    signed short b1=32767;
    signed int b2=2147483647;
    signed long b3=2147483647;
    
    // unsigned关键字修饰，表示无符号数，即不能存储负数
    unsigned short a4=65535;
    unsigned int a5=4294967295;
    unsigned long a6=4294967295;
    
    // 字符型
    char a7= 'A';

    // 实型（浮点型）
    float a8= 43243.4234;
    double a9= 34234.4234;
    long double a10= 43244324.32432434;

    // c语言中基本类型没有布尔型！也没有String字符串
}