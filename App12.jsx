/**
 * 展开运算符传递 props 
 */

function Example1() {
  const props = {
    name: '小明',
    age: 18,
    email: 'xiaoming@example.com'
  }
  
  return (
    <div>
      {/* 展开所有属性 */}
      <UserInfo {...props} />
      
      {/* 展开后覆盖个别属性 */}
      <UserInfo {...props} age={20} />
    </div>
  )
}

function UserInfo({ name, age, email }) {
  return (
    <div>
      <p>姓名：{name}</p>
      <p>年龄：{age}</p>
      <p>邮箱：{email}</p>
    </div>
  )
}