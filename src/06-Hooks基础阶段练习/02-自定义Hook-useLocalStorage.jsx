// 需求描述：自定义hook函数，可以自动同步到本地LocalStorage
// const [message, setMessage] = useLocalStorage(key，defaultValue)
// 1. message可以通过自定义传入默认初始值
// 2. 每次修改message数据的时候 都会自动往本地同步一份

import { useLocalStorage } from "./hooks/useLocalStorage"

function App () {
  const [message, setMessage] = useLocalStorage('hook-key', '阿菲')
  setTimeout(() => {
    setMessage('cp')
  }, 5000)

  return (
    <div>
      {message}
    </div>
  )
}

export default App