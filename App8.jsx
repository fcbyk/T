/**
 * className 和类名绑定
 */

function Example1() {
  const isActive = true
  const hasError = false
  
  // 1 模板字符串拼接
  const className1 = `btn ${isActive ? 'active' : ''} ${hasError ? 'error' : ''}`
  
  // 2 数组 join（更清晰）
  const className2 = [
    'btn',
    isActive && 'active',
    hasError && 'error'
  ].filter(Boolean).join(' ')
  
  return (
    <div>
      <button className={className1}>按钮1</button>
      <button className={className2}>按钮2</button>
      
      {/* 3 简单条件类名 */}
      <div className={isActive ? 'active-box' : 'inactive-box'}>
        条件类名
      </div>
    </div>
  )
}