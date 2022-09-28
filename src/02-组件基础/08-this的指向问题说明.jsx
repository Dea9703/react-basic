import React from "react"

class Test extends React.Component {

  // 解决this指向
  constructor() {
    super()
    // 使用bind强行修正this指向
    // 相当于在类组件初始化的阶段 就可以把回调函数的this修正指向到当前组件实例对象
    this.handler = this.handler.bind(this)
  }

  // this有问题的写法
  handler () {
    console.log(this) // undefined
    // this为undefined。this.setState去修改数据还可以吗？显然就会报错了！
  }
  // this有问题的写法
  handler2 () {
    console.log(this) // undefined
    // this为undefined。this.setState去修改数据还可以吗？显然就会报错了！
  }

  render () {
    // render函数中的this已被react内部做了修正
    // 这里的this就是指向当前的组件实例对象
    // 那么箭头函数中的this 直接沿用父函数中的this 所以箭头函数中的this也是指向当前的组件实例对象
    console.log('父函数中的this指向为：', this)
    return (
      <div>
        <button onClick={this.handler}>click</button>
        {/* 
          如果不通过constructor做修正，可以直接在事件绑定位置
          通过箭头函数的写法 直接沿用父函数中的this指向也是ok的
         */}
        <button onClick={() => this.handler2()}>click2</button>
      </div>

    )
  }
}


function App () {
  return (
    <div className="App">
      <Test />
    </div>
  )
}

export default App