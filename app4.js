/* 
单词边界 (\b, \B)
\b 匹配单词和非单词之间的位置
\B 匹配非单词边界（单词内部或非单词内部）
*/

const print = (...args) => args.forEach(arg => console.log(arg))

const text = `
a cat
category
catdog
scat
the cat sat on the mat
`

const sentences = `
I love JavaScript programming
Java is also popular
JavaScript and Java are different
`

const words = `
cat
matter
battery
at home
`

const content = `
The color is red.
Please read the book.
He runs very fast.
`

print(
    text.match(/\bcat\b/g),              // 只匹配独立的 cat 单词
    sentences.match(/\bJava\b/g),        // 只匹配独立的 Java，不包括 JavaScript
    sentences.match(/\bJavaScript\b/g),  // 匹配完整的 JavaScript
    words.match(/\Bat\B/g),              // 匹配在单词中间的 at
    content.match(/\bred\b/g),           // 只匹配颜色 red，不包括 reads 等
    content.match(/\Bred\B/g)            // 匹配单词内部的 red（如 reads）
)