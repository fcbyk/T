/**
 * 组件作为子元素（Children）
 */

function Card({ title, children }) {
  return (
    <div className="card">
      <h3>{title}</h3>
      <div className="card-content">{children}</div>
    </div>
  )
}

function Example12() {
  return (
    <Card title="卡片标题">
      <p>这是卡片内容</p>
      <button>操作按钮</button>
    </Card>
  )
}