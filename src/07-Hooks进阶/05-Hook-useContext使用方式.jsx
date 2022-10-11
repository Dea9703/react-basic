// hooks下的context使用方式

// 实现步骤
// 1. 使用createContext 创建全局Context对象
// 2. 在顶层组件通过Provider 提供数据
// 3. 在底层组件通过useContext函数获取数据

import React, { useContext, createContext } from 'react'

const Context = createContext()

function Foo () {
  return (<div>
    <div>this is Foo</div>
    <Bar />
  </div>)
}

function Bar () {
  // 底层组件通过useContext函数获取数据  
  const name = useContext(Context)
  return <div>this is Bar name: {name}</div>
}

function App () {
  return (
    // 顶层组件通过Provider 提供数据    
    <Context.Provider value={'this is name'}>
      <div><Foo /></div>
    </Context.Provider>
  )
}

export default App