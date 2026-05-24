#include <stdio.h>

struct student
{
    int num;
    char name[10];
    int computer,english,math;
    double average;
};

// 结构体指针
int main(){
    struct student *pa;
    struct student stu = {101,"zhang",78,87,85};
    pa=&stu;

    // 下面三条语句，效果一样
    // 使用指向运算符->，解引用
    // 也可以先解引用，再访问成员
    stu.num =200;
    (*pa).num = 200;
    pa->num = 200;

    printf("%d\n", stu.num);
}