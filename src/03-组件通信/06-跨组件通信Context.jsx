// 跨组件通信Context
// 目标任务: 了解Context机制解决的问题和使用步骤

// 页面上图片是一个react形成的嵌套组件树，如果我们想从App组件向任意一个下层组件传递数据，该怎么办呢？
// 目前我们能采取的方式就是一层一层的props往下传，显然很繁琐
// 那么，Context 提供了一个无需为每层组件手动添加 props，就能在组件树间进行数据传递的方法

// 实现步骤
// 1- 创建Context对象 导出 Provider 和 Consumer对象
// 2- 使用Provider包裹上层组件提供数据 
// 3- 需要用到数据的组件使用Consumer包裹获取数据


import React, { createContext } from 'react'

// 1. 创建Context对象 
const { Provider, Consumer } = createContext()


// 3. 消费数据
function ComC () {
  return (
    <Consumer >
      {value => <div>{value}</div>}
    </Consumer>
  )
}

function ComA () {
  return (
    <ComC />
  )
}

// 2. 提供数据
class App extends React.Component {
  state = {
    message: 'this is message'
  }
  render () {
    return (
      <Provider value={this.state.message}>
        <div className="app">
          <ComA />
        </div>
      </Provider>
    )
  }
}

export default App