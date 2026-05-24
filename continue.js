//continue跳转语句
//continue 用于退出当前循环返回循环起始继续执行

//获取所有偶数，所有奇数使用 continue 跳过
for (let i = 1; i <= 10; i++) {
    if (i % 2) continue;
    console.log(i);
}
