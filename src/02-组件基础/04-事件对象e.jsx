// 获取事件对象
// 获取事件对象e只需要在 事件的回调函数中 补充一个形参e即可拿到 

function Hello () {
  const clickHandler = (e) => {
    // 阻止默认行为
    e.preventDefault()
    console.log('获取事件对象', e)
  }
  return (
    <div>
      <a onClick={clickHandler} href="http://baidu.com">百度</a>
    </div>
  )
}

function App () {
  return (
    <div className="App">
      <Hello />
    </div>
  )
}

export default App