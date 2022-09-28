import React from "react"

// 受控表单组件(推荐使用)
// 什么是受控组件？  input框自己的状态被React组件状态控制
// React组件的状态的地方是在state中，input表单元素也有自己的状态是在value中，
// React将state与表单元素的值（value）绑定到一起，由state的值来控制表单元素的值，从而保证单一数据源特性

// 实现步骤
// 以获取文本框的值为例，受控组件的使用步骤如下：
// 1. 在组件的state中声明一个组件的状态数据
// 2. 将状态数据设置为input标签元素的value属性的值
// 3. 为input添加change事件，在事件处理程序中，通过事件对象e获取到当前文本框的值（即用户当前输入的值）
// 4. 调用setState方法，将文本框的值作为state状态的最新值

class InputComponent extends React.Component {
  state = {
    message: 'this is message'
  }

  changeMessage = (e) => {
    this.setState({
      message: e.target.value
    })
    console.log(this.state.message)
  }

  render () {
    return (
      <input type="text" value={this.state.message} onChange={this.changeMessage} />
    )
  }
}


function App () {
  return (
    <div className="App">
      <InputComponent />
    </div>
  )
}

export default App