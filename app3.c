/**
 * extern 关键字演示
 * 
 * extern 用于声明在其他文件中定义的函数或变量
 * 告诉编译器："这个函数/变量在别的地方定义了，链接时再找"
 */

#include <stdio.h>

// 声明外部函数（函数定义在 external.c 中）
extern void sayHello();
extern int add(int a, int b);

// 也可以省略 extern，直接声明（效果相同）
// void sayHello();
// int add(int a, int b);

int main() {

    // 调用外部文件中定义的函数
    printf("调用外部函数 sayHello():\n");
    sayHello();
    printf("\n");
    
    printf("调用外部函数 add(10, 20):\n");
    int result = add(10, 20);
    printf("10 + 20 = %d\n", result);
    printf("\n");
    
    printf("说明：这些函数定义在 external.c 文件中\n");
    printf("通过 extern 声明后，可以在本文件中使用\n");
    
    return 0;
}