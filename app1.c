#include <stdio.h>

/**
 * C语言函数定义
 * 
 * 函数的组成：
 * 1. 返回值类型：函数执行后返回的数据类型（void表示无返回值）
 * 2. 函数名：标识符，遵循命名规范
 * 3. 参数列表：形参，可以有0个或多个参数
 * 4. 函数体：具体的实现代码，用{}包裹
 */

// 无参数无返回值函数
void sayHello() {
    printf("Hello, World!\n");
}

// 有参数无返回值函数
void printNumber(int num) {
    printf("数字是: %d\n", num);
}

void printSum(int a, int b) {
    printf("%d + %d = %d\n", a, b, a + b);
}

// 有参数有返回值函数
int add(int a, int b) {
    return a + b;
}

float divide(float a, float b) {
    if (b == 0) {
        printf("错误：除数不能为0！\n");
        return 0;
    }
    return a / b;
}

// 无参数有返回值函数
int getRandomNumber() {
    return 42; // 固定的"随机"数 :)
}

// 主函数
int main() {

    // 调用无参数无返回值函数
    printf("无参数无返回值:\n");
    sayHello();
    printf("\n");
    
    // 调用有参数无返回值函数
    printf("有参数无返回值:\n");
    printNumber(100);
    printSum(10, 20);
    printf("\n");
    
    // 调用有参数有返回值函数
    printf("有参数有返回值:\n");
    int result = add(5, 3);
    printf("5 + 3 = %d\n", result);
    
    float divResult = divide(10.0, 3.0);
    printf("10.0 / 3.0 = %.2f\n", divResult);
    printf("\n");
    
    // 调用无参数有返回值函数
    printf("无参数有返回值:\n");
    int num = getRandomNumber();
    printf("获取的数字: %d\n", num);
    printf("\n");
    
    return 0;
}

