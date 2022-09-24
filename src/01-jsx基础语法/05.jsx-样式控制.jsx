import './App.css'

// jsx样式控制
// 1. 行内样式 - 在元素身上绑定一个style即可
const styleObj = {
  color: '#0000ff',
  fontSize: '30px'
}
// 2. 类名样式 - 在元素身上绑定一个className属性即可(推荐类名样式)

// 增加：动态控制active这个类名，满足条件后才有
const activeFlag = true

function App () {
  return (
    <div className="App">
      {/* 行内样式 - style  */}
      <div style={{ color: '#ff0000', fontSize: '30px' }}>this is div</div>
      {/* 行内样式 - style - 更优写法  */}
      <div style={styleObj}>this is div2</div>
      {/* 类名样式  */}
      <div className='active'>this is div3</div>

      <div className={activeFlag ? 'active' : null}>动态绑定类名test</div>
    </div>
  )
}

export default App