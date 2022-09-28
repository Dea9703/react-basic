// 函数组件的创建和渲染
// 创建
function Hello () {
  return <div>Hello</div>
}

// 渲染 <Hello /> <Hello></Hello>

// 约定说明
// 1. 组件的名称必须首字母大写，react内部会根据这个来判断是组件还是普通的HTML标签
// 2. 函数组件必须有返回值，表示该组件的 UI 结构；如果不需要渲染任何内容，则返回 null
// 3. 组件就像 HTML 标签一样可以被渲染到页面中。组件表示的是一段结构内容，对于函数组件来说，渲染的内容是函数的返回值就是对应的内容
// 4. 使用函数名称作为组件标签名称，可以成对出现也可以自闭合

function App () {
  return (
    <div className="App">
      {/* 渲染函数组件 */}
      <Hello />
      <Hello></Hello>
    </div>
  )
}

export default App