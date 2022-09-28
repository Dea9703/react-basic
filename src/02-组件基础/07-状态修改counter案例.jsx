// 通过类组件修改状态
import React from "react"

class Counter extends React.Component {
  // 1. 通过state定义组件状态
  state = {
    count: 0
  }

  // 2. 事件回调函数(定义修改组件状态方法)
  changeCount = () => {
    // 修改state
    this.setState({
      count: this.state.count + 1
    })
  }

  render () {
    return (
      <button onClick={this.changeCount}>click - {this.state.count}</button>
    )
  }
}


function App () {
  return (
    <div className="App">
      <Counter />
    </div>
  )
}

export default App