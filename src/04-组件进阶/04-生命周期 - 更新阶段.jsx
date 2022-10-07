// 组件的更新阶段的钩子函数以及执行时机
// 钩子函数顺序：render -> componentDidUpdate

// 触发时机：
// render 每次组件渲染都会触发
// componentDidUpdate	组件更新后（DOM渲染完毕）

// 作用：
// render 渲染UI（与 挂载阶段 是同一个render）
// componentDidUpdate DOM操作，可以获取到更新后的DOM内容，不要直接调用setState