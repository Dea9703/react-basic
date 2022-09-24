// 1. 识别常规变量
const name = "abc";
// 2. 原生js方法调用
const getAge = () => {
  return 18;
}
// 3. 运算符(常用)
const flag = true;


function App() {
  return (
    <div className="App">
      <main>
        { name }
        { getAge() }
        { flag ? "真棒" : "真菜" }
      </main>
    </div>
  );
}

export default App;