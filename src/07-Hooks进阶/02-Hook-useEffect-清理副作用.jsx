// 如果想要清理副作用 可以在副作用函数中的末尾return一个新的函数，在新的函数中编写清理副作用的逻辑
// 注意执行时机为：
// 组件卸载时自动执行
// 组件更新时，下一个useEffect副作用函数执行之前自动执行

import { useState, useEffect } from "react"

function Test () {

  useEffect(() => {
    const timer = setInterval(() => {
      console.log('this is test')
    }, 1000)

    return () => {
      clearInterval(timer)
    }
  }, [])


  return (
    <div>
      this is test
    </div>
  )
}

function App () {
  const [flag, setFlag] = useState(true)
  return (
    <div>
      {flag ? <Test /> : null}
      <button onClick={() => setFlag(!flag)}>switch</button>
    </div>
  )
}

export default App