//if分支语句
if (true) {
    console.log('if分支语句');
    console.log('表达式成立');
}

//如果只有一条代码块，可以不用写 {}
if (true) console.log('表达式成立');

//else if 和 else 的使用
let length = 1 ;
let msg;
if (length > 10) msg = "密码已经无敌了";
else if (length > 6)  msg = "密码安全性中级";
else msg = "这密码，要完的节奏";

console.log(msg);
