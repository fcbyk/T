/**
 * 条件渲染
 * 除了三元表达式外的其他方式
 */

// 1 逻辑与 && 短路运算
function Example1() {
  const isLoggedIn = true
  return (
    <div>
      {isLoggedIn && <p>欢迎回来！</p>}
      {/* 当条件为 false 时，不会渲染任何内容 */}
    </div>
  )
}

// 2 if-else 语句（在函数内部使用）
function Example2() {
  const score = 85
  
  let message
  if (score >= 90) {
    message = <span className="excellent">优秀</span>
  } else if (score >= 60) {
    message = <span className="pass">及格</span>
  } else {
    message = <span className="fail">不及格</span>
  }
  
  return <div>成绩：{message}</div>
}

// 3 立即执行函数 IIFE
function Example3() {
  const type = 'admin'
  return (
    <div>
      {(() => {
        switch (type) {
          case 'admin':
            return <p>管理员权限</p>
          case 'user':
            return <p>普通用户</p>
          default:
            return <p>未知角色</p>
        }
      })()}
    </div>
  )
}