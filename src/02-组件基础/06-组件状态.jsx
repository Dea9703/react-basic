import React from "react"
// 组件状态 类组件作为演示
// 在React hook出来之前，函数式组件是没有自己的状态的，所以我们统一通过类组件来讲解

class TestComponent extends React.Component {
  // 1. 定义组件状态
  state = {
    /** 在这里可以定义各种类型数据，全都是当前组件的状态 */
    name: 'cp teacher'
  }

  // 3. 修改state中的状态name
  changeName = () => {
    /** 注意：不可以直接做赋值修改，必须通过一个方法 setState */
    this.setState({
      name: 'Dea handsome'
    })
  }

  render () {
    return (
      <div>
        <div>this is TestComponent</div>
        {/* 2. 使用状态 */}
        <div>当前name为：{this.state.name}</div>
        <button onClick={this.changeName}>修改name</button>
      </div>
    )
  }
}

/**
 * 总结：
 * 1. 编写组件其实就是编写原生js类或者函数
 * 2. 定义状态必须通过state，实例属性的方法提供一个 定义状态对象，该对象固定名称就是state
 * 3. 修改state状态中的任何属性 都不可以通过直接赋值修改 必须通过setState方法 该方法来自于继承 React.Component 得到
 * 4. 这里的this是关键词 很容易出现指向错误问题 上面的写法是最推荐和最规范的 没有this指向问题
 */

function App () {
  return (
    <div className="App">
      <TestComponent />
    </div>
  )
}

export default App