#include <stdio.h>

// 定义结构体
struct student
{
    int num;
    char name[10];
    int computer,english,math;
    double average;
};

// 定义结构体并声明结构体变量
struct student2
{
    int num;
    char name[10];
    int computer,english,math;
    double average;
}a3,a4;

/**
 * 匿名结构体
 * 定义结构体并声明结构变量
 * 和上面不同，这个结构体没有名字
 * 在此语句后无法在定义这个类型的其他结构体变量
 */
struct{
    int num;
    char name[10];
    int computer,english,math;
    double average;
}a5,a6;

int main(){
    // 定义结构体变量a1、a2，其数据类型都为struct student
    struct student a1,a2;

    // 结构体初始化
    struct student a7 = {101,"不乐",78,87,85};

    // 结构体单独赋值
    a1.num=100;

    printf("%s\n",a7.name);
    printf("%d\n",a1.num);
}