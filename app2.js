/* 
结尾匹配 ($)
$ 匹配整个字符串最后面的位置
*/

const text = `
photo.jpg
image.png
document.pdf
backup.jpg.bak
archive.tar.gz
`

const urls = `
https://example.com/page.html
http://test.org/index.php
ftp://files.net/data.csv
`

const files = `
report.docx
presentation.pptx
spreadsheet.xlsx
notes.txt
`

const print = (...args) => args.forEach(arg => console.log(arg))

// 使用 $ 匹配以 .jpg 结尾的行
print(
    text.match(/\.jpg$/gm),                   // 匹配以 .jpg 结尾
    text.match(/\w+\.jpg$/gm),                // 匹配以 .jpg 结尾的文件名
    urls.match(/\.html$/gm),                  // 只匹配以 .html 结尾的 URL
    files.match(/\.(docx|pptx|xlsx)$/gm),     // 匹配 Office 文档扩展名
)