//break跳转语句
//break 用于退出当前循环

//获取三个奇数，超过时使用break退出循环
let count = 0;
for (let i = 1; i <= 10; i++) {
    if (i % 2) {
        console.log(i);
        if (++count == 3) break;
    }
}
