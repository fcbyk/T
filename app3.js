/* 
精确匹配 (^...$)
^内容$ = 必须从头到尾完全一样
用于校验验证码、手机号、邮编等
*/

const print = (...args) => args.forEach(arg => console.log(arg))

const text = `
123456
a123456
1234567
12345
abc123
`

const codes = `
AB1234
CD5678
EF9012
GHI345
JK678
`

const phones = `
13800138000
1380013800
138001380001
+8613800138000
`

const emails = `
test@example.com
user@domain.org
invalid-email
@missing-local.com
missing-domain@
`

print(
    text.match(/^\d{6}$/gm),       // 只匹配完整的6位数字
    codes.match(/^[A-Z]{2}\d{4}$/gm),  // 匹配特定格式的编码 2字母+4数字
    phones.match(/^1[3-9]\d{9}$/gm),   // 匹配11位手机号
    emails.match(/^\w+@\w+\.\w+$/gm),  // 简单邮箱格式校验
)





