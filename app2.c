#include <stdio.h>

// 函数声明（原型）
// 如果函数定义在main之后，需要先声明
int multiply(int x, int y);  // 函数声明，以分号结尾

int main() {
    // 调用在后面定义的函数（因为有声明）
    printf("函数声明示例:\n");
    int mulResult = multiply(6, 7);
    printf("6 * 7 = %d\n", mulResult);
    printf("\n");
    return 0;
}

// 函数定义在main之后（需要在前面有声明）
int multiply(int x, int y) {
    return x * y;
}
