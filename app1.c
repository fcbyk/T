#include <stdio.h>

//数组
int main(){
    // 声明数组时需要设定数组大小
    int arr1[5];

    // 声明数组并初始化
    int arr2[5]={1,2,3,4,5};

    // 遍历输出
    int i,u;
    for ( i = 0; i < 5; i++){
        printf("%d\n",arr2[i]);
    }

    // 二维数组
    printf("-----------------------\n");
    int arr3[2][3]={9,8,7,6,5,4};
    for ( i = 0; i < 2; i++){
        for(u=0;u<3;u++){
            printf("%d\n",arr3[i][u]);
        }
    }
}