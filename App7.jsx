/**
 * 样式绑定
 */

function Example1() {
  // 1 内联样式（驼峰命名）
  const boxStyle = {
    backgroundColor: 'lightblue',  // 注意：background-color -> backgroundColor
    fontSize: '16px',              // 注意：font-size -> fontSize
    marginTop: '10px',             // 注意：margin-top -> marginTop
    border: '1px solid #ccc'
  }
  
  // 2 动态样式
  const isActive = true
  const dynamicStyle = {
    color: isActive ? 'green' : 'red',
    fontWeight: isActive ? 'bold' : 'normal'
  }
  
  return (
    <div>
      <div style={boxStyle}>固定样式</div>
      <div style={dynamicStyle}>动态样式</div>
      
      {/* 3 合并样式 */}
      <div style={{ ...boxStyle, ...dynamicStyle }}>
        合并样式
      </div>
    </div>
  )
}
