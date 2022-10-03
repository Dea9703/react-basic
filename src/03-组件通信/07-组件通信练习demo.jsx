import React from 'react'

const styleObj = {
  width: '300px',
  marginTop: '10px',
  padding: '10px',
  backgroundColor: '#f01a9e'
}

// 3. 消费数据
function ListItem (props) {
  const { removeItem, item } = props
  const { id, name, price, info } = item
  return (
    <div style={styleObj}>
      <h3>{name}</h3>
      <p>{price}</p>
      <p>{info}</p>
      <button onClick={() => removeItem(id)}>删除</button>
    </div>
  )
}

// 2. 提供数据
class App extends React.Component {
  state = {
    // 列表数据
    list: [
      { id: 1, name: '超级好吃的棒棒糖', price: 18.8, info: '开业大酬宾，全场8折' },
      { id: 2, name: '超级好吃的大鸡腿', price: 34.2, info: '开业大酬宾，全场8折' },
      { id: 3, name: '超级无敌的冰激凌', price: 14.2, info: '开业大酬宾，全场8折' }
    ]
  }

  removeItem = (id) => {
    this.setState({
      list: this.state.list.filter(item => item.id !== id)
    })
  }

  render () {
    return (
      <div className="app">
        {this.state.list.map(item =>
          <ListItem
            key={item.id}
            item={item}
            removeItem={this.removeItem}
          />
        )}
      </div>
    )
  }
}

export default App