/**
 * Fragment（片段）
 * 包裹多个 JSX 元素，但不生成真实 DOM
 * 为什么需要 Fragment：React 组件必须返回一个根节点
 */

import React from 'react'

function E1() {
  return (
    // 完整写法，需要导入React
    <React.Fragment>
      <h1>Hello</h1>
      <p>React</p>
    </React.Fragment>
  )
}

function E2() {
  return (
    // 简写
    <>
      <h1>Hello</h1>
      <p>React</p>
    </>
  )
}

export default function() {
  return (
    <>
      <E1 />
      <E2 />
    </>
  )
}
