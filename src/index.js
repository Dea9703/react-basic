import React from 'react'; /** React：框架核心包 */
import ReactDOM from 'react-dom/client'; /** ReactDOM：专门做渲染相关的包 */
import './index.css'; /** 应用的全局样式文件 */
import App from './App';  /** 引入根组件 */

// 渲染根组件App 到一个id为root的dom节点上
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // React.StrictMode: React的严格模式节点。需要去掉，会影响useEffect的执行时机
  // <React.StrictMode>
    <App />
  // </React.StrictMode>
);
