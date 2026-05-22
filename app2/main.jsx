import React from 'react'
import ReactDOM from 'react-dom/client'

import App from './App'

ReactDOM.createRoot(document.getElementById('root')).render(
  // React 的严格模式，开发阶段的检查工具组件
  <React.StrictMode>
    <App />
  </React.StrictMode>
)