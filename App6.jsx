/**
 * 事件处理
 */

function Example1() {
  // 1 基本事件处理
  const handleClick = (e) => {
    console.log('点击了按钮', e)
  }
  
  // 2 带参数的事件处理（使用箭头函数）
  const handleDelete = (id) => {
    console.log('删除 ID:', id)
  }
  
  // 3 阻止默认行为
  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('表单提交')
  }
  
  return (
    <div>
      <button onClick={handleClick}>点击我</button>
      <button onClick={() => handleDelete(123)}>删除</button>
      <form onSubmit={handleSubmit}>
        <button type="submit">提交</button>
      </form>
      
      {/* 4 其他常见事件 */}
      <input 
        onChange={(e) => console.log(e.target.value)}
        onKeyDown={(e) => console.log('按键:', e.key)}
        onMouseEnter={() => console.log('鼠标进入')}
        onMouseLeave={() => console.log('鼠标离开')}
      />
    </div>
  )
}