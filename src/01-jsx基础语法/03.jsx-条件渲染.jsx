// 条件渲染
// 技术方案：三元表达式(常用) 逻辑 && 运算

// 1. 三元表达式
// 2. &&

const flag = true

function App() {
  return (
    <div className="App">
      {flag ? <span>hello</span> : <span>world</span>}
      {false && <span>false</span>}
    </div>
  );
}

export default App;
