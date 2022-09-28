import React from "react"

// 如何绑定事件
// 语法: on + 事件名称 = { 事件处理程序 } ，比如：<div onClick={ onClick }></div> 
// 注意点: react事件采用驼峰命名法，比如：onClick、onMouseEnter、onFocus

function Hello () {
  const clickHandler = () => {
    console.log('函数组件中的事件被触发了')
  }

  return <div onClick={clickHandler}>this is function Component</div>
}

class HelloComponent extends React.Component {
  /**
   * 事件回调函数(标准写法，避免this指向问题)
   * 这样写 回调函数中的this指向的是当前的组件实例对象 
   * */
  clickHandler = () => {
    console.log('类组件中的事件被触发了')
  }

  render () {
    /** HelloComponent被调用时会new一个实例对象，调用当前实例对象的方法需要使用this */
    return <div onClick={this.clickHandler}>this is class Component</div>
  }
}

function App () {
  return (
    <div className="App">
      <Hello />
      <Hello></Hello>
      <HelloComponent />
      <HelloComponent></HelloComponent>
    </div>
  )
}

export default App