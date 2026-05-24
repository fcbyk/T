/**
 * 三元运算符
 * 三元运算符是针对 if 判断的简写形式
 */
function ternary() {
    n = true ? 1 : 2;
    console.log(n); //1

    let f = true ? (1 == true ? 'yes' : 'no') : 3;
    console.log(f); // yes
}