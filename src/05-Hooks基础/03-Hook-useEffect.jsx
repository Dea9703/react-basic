// 一、理解函数副作用
// 副作用是相对于主作用来说的，一个函数除了主作用，其他的作用就是副作用；
// 对于 React 组件来说，主作用就是根据数据（state/props）渲染 UI，除此之外都是副作用(比如，手动修改 DOM)。
// 常见的副作用：
//    1. 数据请求 ajax发送
//    2. 手动修改dom
//    3. localstorage操作
// useEffect函数的作用就是为react函数组件提供副作用处理的！

// 二. 基础使用
// 1. 导入 useEffect 函数
// 2. 调用 useEffect 函数，并传入回调函数
// 3. 在回调函数中编写副作用处理（dom操作）
// 4. 修改数据状态
// 5. 检测副作用是否生效

// 三、依赖项控制执行时机
// 1. 默认状态(无依赖项)：组件首次渲染执行一次，以及不管是哪个状态更改引起组件更新时都会重新执行
// 2. 添加一个空数组依赖项：组件只在首次渲染时执行一次
// 3. 添加特定依赖项：副作用函数在首次渲染时执行，只有在添加对应的依赖项发生变化时才会重新执行

// 注意事项
// useEffect 回调函数中用到的数据（比如，count）就是依赖数据，就应该出现在依赖项数组中，如果不添加依赖项就会有bug出现


import { useState, useEffect } from 'react'

function App () {
  // count：数据状态
  // setCount：修改count的专有函数
  const [count, setCount] = useState(0)
  const [name, setName] = useState('dea')

  // 默认状态(无依赖项)
  // useEffect(() => {
  //   console.log('默认状态(无依赖项)副作用执行了')
  // })

  // 添加一个空数组依赖项
  // useEffect(() => {
  //   console.log('添加一个空数组依赖项副作用执行了')
  // }, [])

  // 添加特定依赖项
  useEffect(() => {
    console.log('添加特定依赖项副作用执行了')
  }, [count, name]) // 可添加多个依赖项。多个依赖项其中一个状态被修改时就会执行副作用函数

  return (
    <div className='App'>
      <button onClick={() => setCount(count + 1)}>{count}</button>
      <button onClick={() => setName(name === 'dea' ? 'cp' : 'dea')}>{name}</button>
    </div>
  )
}

export default App