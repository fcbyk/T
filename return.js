//return跳转语句
//跳出函数体，返回到主程序之中，不再往下执行函数体里面的语句

function testReturn() {
    console.log("函数开始执行");
    if(false) return 0;
    console.log("这行代码会执行");
}

testReturn();
