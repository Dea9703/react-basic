// 使用useEffect hook发送网络请求
// 使用场景：
// 在useEffect中发送网络请求，并且封装同步 async await操作
// 语法要求：
// 不可以直接在useEffect的回调函数外层直接包裹 await ，因为异步会导致清理函数无法立即返回

import { useEffect } from 'react'
import axios from 'axios'

function App () {
  const fetchData = async () => {
    const res = await axios.get('http://geek.itheima.net/v1_0/channels')
    console.log(res)
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <div>
    </div>
  )
}

export default App