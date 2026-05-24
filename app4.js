/**
 * 比较运算符
 * >、<、>=、<=
 * ==	强制类型转换比较
 * ===	不强制类型转换比较
 */
function comparison(a = 1, b = 2, c = "1") {
    console.log(a < b); //true
    console.log(a == b); //false
    console.log(a == c); //true
    console.log(a === c); //false
    console.log(a == true); //true
    console.log(a === true); //false
}

comparison();
