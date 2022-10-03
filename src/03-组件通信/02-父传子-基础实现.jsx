import React from "react"

// Son是子组件

// 函数组件Son
function SonFn (props) {
  // props是一个对象 里面存着通过父组件传入的所有数据
  return (
    <div> 我是函数子组件,{props.msg} </div>
  )
}

// 类组件Son
class SonClass extends React.Component {
  // 类组件必须通过this关键词 去获取props
  render () {
    return (
      <div>我是类子组件,{this.props.msg}</div>
    )
  }
}



// App为父组件
class App extends React.Component {
  // 数据
  state = {
    message: 'this is message'
  }

  render () {
    return (
      <div className="App">
        <SonFn msg={this.state.message} />
        <SonClass msg={this.state.message} />
      </div>
    )
  }
}

export default App