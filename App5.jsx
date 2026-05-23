/**
 * 列表渲染的更多方式
 */

// 1. 使用 filter + map
function Example1() {
  const users = [
    { id: 1, name: 'Alice', active: true },
    { id: 2, name: 'Bob', active: false },
    { id: 3, name: 'Charlie', active: true }
  ]
  
  return (
    <ul>
      {users
        .filter(user => user.active)
        .map(user => (
          <li key={user.id}>{user.name}</li>
        ))
      }
    </ul>
  )
}

// 2. 动态生成列表
function Example2() {
  return (
    <div>
      {Array.from({ length: 5 }, (_, i) => (
        <div key={i}>第 {i + 1} 项</div>
      ))}
    </div>
  )
}