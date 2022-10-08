// 需求描述：自定义一个hook函数，实现获取滚动距离Y
// const [y] = useWindowScroll()

import { useWindowScroll } from "./hooks/useWindowScroll"

function App () {
  const [y] = useWindowScroll()
  return (
    <div style={{ height: '12000px' }}>
      {y}
    </div>
  )
}

export default App