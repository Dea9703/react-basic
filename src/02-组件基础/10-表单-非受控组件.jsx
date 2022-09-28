import React, { createRef } from "react"
/**
 * 受控组件 => 归属于state状态管理
 * 不受控组件 => 不归属于state状态管理，使用createRef语义化自定义即可
 */

// 非受控表单组件(了解)
// 什么是非受控组件？
// 非受控组件就是通过手动操作dom的方式获取文本框的值，
// 文本框的状态不受react组件的state中的状态控制，直接通过原生dom获取输入框的值


class InputComponent extends React.Component {
  // 这个实例属性是可以自定义的 语义化即可
  msgRef = createRef()

  getValue = () => {
    // 通过msgRef获取 input value 值
    console.log(this.msgRef.current) // 打印出来就是原生dom元素
    console.log(this.msgRef.current.value)
  }

  render () {
    return (
      <>
        <input type="text" ref={this.msgRef} />
        <button onClick={this.getValue}>点击获取输入框的值</button>
      </>

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