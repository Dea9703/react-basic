// 掌握props中children属性的用法
// children属性是什么：表示该组件的子节点，只要组件内部有子节点，props中就有该属性
// children可以是什么：
// 1. 普通文本
// 2. 普通标签元素
// 3. 函数 / 对象
// 4. JSX


import React from 'react'

function Item ({ children }) {
  return <>
    Hello World,{children}
  </>
}

class App extends React.Component {
  render () {
    return (
      <div className="app">
        <Item>
          this is children
        </Item>
      </div>
    )
  }
}

export default App