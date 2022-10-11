// 使用useRef获取真实dom或组件实例的方法
// 使用场景：
// 在函数组件中获取真实的dom元素对象或者是组件对象

// 使用步骤：
// 1. 导入 useRef 函数
// 2. 执行 useRef 函数并传入null，返回值为一个对象 内部有一个current属性存放拿到的dom对象（组件实例）
// 3. 通过ref 绑定 要获取的元素或者组件

import React, { useEffect, useRef } from 'react'

class Test extends React.Component {
  sayHi = () => {
    console.log('say hi')
  }

  render () {
    return (
      <div>this is test</div>
    )
  }
}

function App () {
  const testRef = useRef(null)

  useEffect(() => {
    console.log(testRef)
  }, [])

  return (
    <div>
      <Test ref={testRef} />
    </div>
  )
}

export default App