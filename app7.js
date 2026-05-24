/**
 * typeof运算符
 * typeof运算符的语法格式： typeof 变量名
 * typeof运算符的运算结果是以下6个字符串之一：注意字符串都是全部小写
 * undefined、 number、string、boolean、object、function
 */
function testTypeof() {
    n = 100
    let type = typeof n
    console.log(typeof type)
    console.log(type)
}

testTypeof();
