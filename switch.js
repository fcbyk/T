/**
 * switch分支语句
 * 如果表达式等于 case 中的值，将执行此 case 代码段
 * break 关键字会终止 switch 的执行
 * 如果case执行后缺少 break 则接着执行后面的语句
 * 没有任何 case匹配时将执行default 代码块
 */
let s = '视频';
switch (s) {
    case '产品':
        console.log('1');
        break;
    case '视频':
        console.log('2');
        break;
    default:
        console.log('3')
}


//case 合用示例
let error = 'warning';
switch (error) {
    case 'notice':
    case 'warning':
        console.log('警告或提示信息');
        break;
    case 'error':
        console.log('错误信息');
}


//在switch 与 case 都可以使用表达式
let age = 10
switch (true) {
    case age < 15:
        console.log("儿童");
        break;
    case age < 25:
        console.log("青少年");
        break;
    case age < 40:
        console.log("青年");
        break;
    case age < 60:
        console.log("中年");
        break;
    case age < 100:
        console.log("老年");
        break;
    default:
        console.log("年龄输出错误");
}


//缺少 break ，会接着执行后面的 switch 代码
switch (1) {
    case 1:
        console.log(1);
    case 2:
        console.log(2);
    default:
        console.log("default");
}