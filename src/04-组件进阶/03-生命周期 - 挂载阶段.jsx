// 组件挂载阶段执行的钩子函数和执行时机
// 钩子函数顺序：constructor -> render -> componentDidMount

// 触发时机：
// constructor	创建组件时，最先执行，初始化的时候只执行一次
// render	每次组件渲染都会触发
// componentDidMount	组件挂载（完成DOM渲染）后执行，初始化的时候执行一次

// 作用：
// constructor 1. 初始化state  2. 创建 Ref 3. 使用 bind 解决 this 指向问题等
// render 每次组件渲染都会触发	渲染UI(注意： 不能在里面调用setState())
// componentDidMount 1. 发送网络请求   2.DOM操作