/**
 * 一元运算符
 * ++、--
 */
function unary() {

    //前置操作
    let n = 1;
    ++n     //等价于n=n+1 
    console.log(n); //2
    --n     //等价于n=n-1 
    console.log(n); //1

    //后置操作
    n++     //等价于n=n+1 
    console.log(n); //2

    //前置操作与后置操作的区别
    //前置操作会在表达式最先执行，后置操作会在表达式最后执行
    let num = 2;
    let sum = 30 + ++num;
    console.log(sum);    //33

    num = 2;
    sum = 30 + num++;
    console.log(sum);    //32

    a = 1;
    b = a++ + 2;
    console.log(b);     //3

}

unary();
