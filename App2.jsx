/**
 * 表达式插值
 * JSX 的 {} 本质：在 JSX 中嵌入 JavaScript 表达式
 */

const name = "小明"

// 1. 变量
const e1 = <div>Hello {name}</div>

// 2. 运算
const e2 = <div>{1 + 1}</div>

// 3. 字符串拼接
const e3 = <div>{name + "你好"}</div>

// 4. 三元表达式
const e4 = <div>{true ? "是" : "否"}</div>

// 5. 函数调用
const getName = () => "小明"
const e5 = <div>{getName()}</div>

// 6. 数组 map
const list = ["A", "B", "C"]
const e6 = (
  <ul>
    {
      list.map(item => (
        <li key={item}>{item}</li>
      ))
    }
  </ul>
)

// 7. JSX
const e7 = (
<div>
{
  ok
    ? <h1>yes</h1>
    : <h1>no</h1>
}
</div>
)

// 8. 属性里也能写各种表达式
const url = '/logo.png'
const e8 = (
<>
  <img src={url} />
  <div width={100 + 20} />
  <button disabled={isLoading} />
  <img src={dark ? darkLogo : lightLogo} />
  <button onClick={handleClick}></button>
  <div style={{ color: 'red' }}>对象</div>
  <List items={[1, 2, 3]} />
</>
)



