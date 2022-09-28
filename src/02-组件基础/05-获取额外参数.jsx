// 获取额外参数
// 如何获取额外的参数？
// onClick={ clickHandler } -> onClick={ () => clickHandler(msg) }
// 注意: 一定不要在模板中写出函数调用的代码 onClick = { clickHandler(msg) }，这种是非常糟糕的！！！

function Hello () {
  const clickHandler = (msg) => {
    console.log('函数组件中的事件被触发了', msg)
  }
  return (
    <div onClick={() => clickHandler('this is msg')}>click me</div>
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