// props传递时的一些注意事项
// 1. props是只读对象（readonly）
// 根据单项数据流的要求，子组件只能读取props中的数据，不能进行修改
// 2. props可以传递任意数据
// 数字、字符串、布尔值、数组、对象、函数、JSX

import React from "react"

// 函数组件Son
function SonFn (props) {
  // props是一个对象 里面存着通过父组件传入的所有数据
  console.log(props)
  return (
    <div>
      我是函数子组件,{props.list.map(item => <p key={item}>{item}</p>)}
      <div>{props.userInfo.name}</div>
      <button onClick={props.getMes}>触发父组件传入的函数</button>
      {props.child}
    </div>
  )
}

// App为父组件
class App extends React.Component {
  // 数据
  state = {
    list: [1, 2, 3],
    userInfo: {
      name: 'dea',
      age: 25
    },
    isMan: true,
  }

  getMes = () => {
    console.log('父组件中的函数')
  }

  render () {
    return (
      <div className="App">
        <SonFn
          list={this.state.list}
          userInfo={this.state.userInfo}
          age={this.state.userInfo.age}
          isMan={this.state.isMan}
          getMes={this.getMes}
          child={<span>this is child</span>}
        />
      </div>
    )
  }
}

export default App