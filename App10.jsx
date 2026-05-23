/**
 * dangerouslySetInnerHTML（谨慎使用）
 */

function Example1() {
  const htmlContent = '<strong>这是 HTML 内容</strong>'
  
  return (
    <div 
      dangerouslySetInnerHTML={{ __html: htmlContent }}
    />
  )
}