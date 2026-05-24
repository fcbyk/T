#include <stdio.h>

// 这是一个在其他文件中定义的函数
void sayHello() {
    printf("Hello from external file!\n");
}

// 另一个外部函数
int add(int a, int b) {
    return a + b;
}
