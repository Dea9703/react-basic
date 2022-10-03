// 实现父子通信中的子传父
// 口诀：父组件给子组件传递回调函数，子组件调用

// 实现步骤
// 1. 父组件提供一个回调函数 - 用于接收数据
// 2. 将函数作为属性的值，传给子组件
// 3. 子组件通过props调用 回调函数
// 4. 将子组件中的数据作为参数传递给回调函数

import React from "react"

// 函数组件Son
function SonFn (props) {
  // props是一个对象 里面存着通过父组件传入的所有数据
  function handlerMsg () {
    props.changeMsg('this is newMessage1')
  }
  const { changeMsg } = props
  return (
    <div>
      <p>我是函数子组件</p>
      <p>{props.message}</p>
      <button onClick={handlerMsg}>changeMsg1</button>
      <button onClick={() => changeMsg('this is newMessage2')}>changeMsg2</button>
    </div>
  )
}

// App为父组件
class App extends React.Component {
  // 数据
  state = {
    message: 'this is message',
  }
  changeMsg = (newMsg) => {
    console.log('子组件传递过来的数据: ', newMsg)
    this.setState({
      message: newMsg
    })
  }

  render () {
    return (
      <div className="App">
        <SonFn
          message={this.state.message}
          changeMsg={this.changeMsg}
        />
      </div>
    )
  }
}

export default App