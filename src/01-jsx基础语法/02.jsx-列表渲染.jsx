// react如何完成列表渲染
// 技术方案：map 重复渲染的是哪个模板 就return谁
// 注意事项：
// 1. 遍历列表时需要一个类型为String/Number不可重复的key，提高diff性能
// 2. key 在 HTML 结构中是看不到的，是 React 内部用来进行性能优化时使用
// 3. 如果列表中有像 id 这种的唯一值，就用 id 来作为 key 值
// 4. 如果列表中没有像 id 这种的唯一值，就可以使用 index（下标）来作为 key 值

// 列表
const songs = [
  { id: 1, name: '痴心绝对' },
  { id: 2, name: '像我这样的人' },
  { id: 3, name: '南山南' }
]

function App() {
  return (
    <div className="App">
      <ul>
        { songs.map(song => <li key={song.id}>{song.name}</li>) }
      </ul>
    </div>
  );
}

export default App;