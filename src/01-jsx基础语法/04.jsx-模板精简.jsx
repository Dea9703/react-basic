// 有一个类型type 1 2 3
// 1 => h1
// 2 => h2
// 3 => h3

// 原则：模板中的逻辑尽量保持精简
// 复杂的多分枝逻辑，收敛为一个函数。通过一个专门的函数来写分支逻辑，模板中只负责调用函数。

const getHTag = (type) => {
  switch(type) {
    case 1:
      return <h1>this is H1</h1>
    case 2:
      return <h2>this is H2</h2>
    case 3:
      return <h3>this is H3</h3>
    default:
      return null;
  }
}

function App() {
  return (
    <div className="App">
      {getHTag(1)}
      {getHTag(2)}
      {getHTag(3)}
    </div>
  );
}

export default App;
