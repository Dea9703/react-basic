// 实现兄弟组件之间的通信

// 核心思路： 通过状态提升机制，利用共同的父组件实现兄弟通信

// 实现步骤
// 1. 将共享状态提升到最近的公共父组件中，由公共父组件管理这个状态
//      ○ 提供共享状态
//      ○ 提供操作共享状态的方法
// 2. 要接收数据状态的子组件通过 props 接收数据
// 3. 要传递数据状态的子组件通过props接收方法，调用方法传递数据


import React from "react"

function SonA (props) {
  return (
    <>
      <p>我是子组件A: {props.msg}</p>
    </>
  )
}

function SonB (props) {
  const { changeMsg } = props
  return (
    <>
      <p>我是子组件B</p>
      <button onClick={() => changeMsg('newMsg')}>发送B子组件数据 newMsg</button>
    </>
  )
}

class App extends React.Component {
  state = {
    msg: 'msg'
  }

  changeMsg = (newMsg) => {
    this.setState({
      msg: newMsg
    })
  }

  render () {
    return (
      <div>
        <SonA msg={this.state.msg} />
        <SonB changeMsg={this.changeMsg} />
      </div>
    )
  }
}

export default App