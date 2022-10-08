// 一、useState基础使用
// 1. 导入 useState 函数
// 2. 调用 useState 函数，并传入状态的初始值(必须在函数组件中)
// 3. 从useState函数的返回值中，拿到状态和修改状态的方法 [状态，状态修改的方法]
// 4. 使用数据，修改数据

// 二、状态的读取和修改
// const [count, setCount] = useState(0)
// 1. useState传过来的参数，作为count的初始值
// 2. [count, setCount]这里的写法是一个解构赋值 useState返回值是一个数组
//    名字可以自定义吗？-> 可以自定义保持语义化
//    顺序可以更换吗？-> 不可以 第一个参数就是数据状态，第二个参数就是修改数据的方法
// 3. setCount函数 作用就是专门用来修改count状态，仍是不能修改原值需要生成一个新值替换原值
//    setCount(基于原值计算得到的新值)
// 4. count和setCount是一对 绑定在一起的 setCount只能用来修改count状态

// 三、组件的更新过程
// 函数组件使用 useState hook 后的执行过程，以及状态值的变化：

// ● 组件第一次渲染 
//   a. 从头开始执行该组件中的代码逻辑
//   b. 调用 useState(0) 将传入的参数作为状态初始值，即：0
//   c. 渲染组件，此时，获取到的状态 count 值为： 0

// ● 组件第二次渲染 
//   a. 点击按钮，调用 setCount(count + 1) 修改状态，因为状态发生改变，所以，该组件会重新渲染
//   b. 组件重新渲染时，会再次执行该组件中的代码逻辑
//   c. 再次调用 useState(0)，此时 React 内部会拿到最新的状态值而非初始值，比如，该案例中最新的状态值为 1
//   d. 再次渲染组件，此时，获取到的状态 count 值为：1

// 注意：useState(初始值或者说参数)只会在函数组件第一次渲染时生效；
// 也就是说，以后的每次渲染，useState 获取到都是最新的状态值，React 组件会记住每次最新的状态值。

// 四、使用规则
// 1. useState 函数可以执行多次，每次执行互相独立，每调用一次为函数组件提供一个状态
// 2. useState 注意事项 
//    a. 只能出现在函数组件或者其他hook函数中 
//    b. 不能嵌套在if/for/其它函数中(react按照hooks的调用顺序识别每一个hook)
//    c. 可以通过开发者工具查看hooks状态 

import { useState } from 'react'

function App () {
  // count：数据状态
  // setCount：修改count的专有函数
  const [count, setCount] = useState(0)
  const [flag, setFlag] = useState(true)
  const [list, setList] = useState([])

  function test () {
    setCount(count + 1)
    setFlag(false)
    setList([1, 2, 3])
  }

  return (
    <div className='App'>
      <p>count:{count}</p>
      <p>flag: {flag ? 1 : 0}</p>
      <p>{list.join('-')}</p>
      <button onClick={test}>{count}</button>
    </div>
  )
}

export default App