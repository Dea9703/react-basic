import React from "react"
// 类组件的创建和渲染
// 创建
class HelloComponent extends React.Component {
  render () {
    return <div>this is class Component</div>
  }
}
// 渲染 <HelloComponent /> <HelloComponent></HelloComponent>

// 约定说明
// 1. 类名称也必须以大写字母开头
// 2. 类组件应该继承 React.Component 父类，从而使用父类中提供的方法或属性
// 3. 类组件必须提供 render 方法且 render 方法必须有返回值，表示该组件的 UI 结构

function App () {
  return (
    <div className="App">
      {/* 渲染类组件 */}
      <HelloComponent />
      <HelloComponent></HelloComponent>
    </div>
  )
}

export default App