/**
 * ref 引用 DOM 元素
 */

import React from 'react'

function Example1() {
  const inputRef = React.useRef(null)
  
  const focusInput = () => {
    inputRef.current?.focus()
  }
  
  return (
    <div>
      <input ref={inputRef} placeholder="点击按钮聚焦" />
      <button onClick={focusInput}>聚焦输入框</button>
    </div>
  )
}