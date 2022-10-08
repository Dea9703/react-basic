import { useState } from "react"

export function useWindowScroll () {
  const [y, setY] = useState(0)
  // 滚动事件发生时 不断获取滚动值 然后交给y
  window.addEventListener('scroll', () => {
    let h = document.documentElement.scrollTop
    setY(h)
  })
  return ([y])
}

