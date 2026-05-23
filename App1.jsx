/**
 * JSX 可以当成一种 JS 表达式
 * 能赋值变量、传参、函数返回、三元、数组里放
 * 写法长得像 HTML，底层最终编译成 React.createElement
 * JSX 不是字符串，不是 HTML，而是“描述 UI 的 JavaScript 对象”
 */


// 1. 赋值给变量
const ele = <div>我是JSX</div>;

// 2. 当参数传递
function render(node) {
  console.log(node);
}
render(<p>传参JSX</p>);

// 3. 放在数组、三元判断里
const list = [<span>A</span>, <span>B</span>];
const ui = 1 > 0 ? <div>成立</div> : null;

// 4. 当函数返回值
export default function() {
  return (
    <div>
      {ele}
      {list}
      {ui}
    </div>
  )
}
