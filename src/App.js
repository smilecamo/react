import React, { Component, Fragment } from 'react';
import './style.css'
import AppItem from'./AppItem'
class App extends Component {
  constructor(props) {
    super(props)
    this.state ={
      inputValue: '',
      list: []
    }
  }

  render() {
    return (
      <Fragment>
        <input
          className='input'
          type="text"
          value={this.state.inputValue}
          onChange={this.onChangeInputValue.bind(this)}
        />
        <button
          onClick={this.handleBtnClick.bind(this)}
        >提交</button>
        <ul>
          {
            this.state.list.map((item, index) =>{
              return (
              <Fragment>
                <AppItem
                content={item}
                index={index}
                deleteItem={this.removeThis.bind(this)}
                />
              </Fragment>
              )
            })
          }
        </ul>
      </Fragment>
    );
  }
  onChangeInputValue(e){
    this.setState({
      inputValue: e.target.value
    })
  }
  handleBtnClick(){
    this.setState({
      list: [...this.state.list, this.state.inputValue],
      inputValue: ''
    })
  }
  removeThis(index){
    const list = [...this.state.list]
    list.splice(index, 1)
    this.setState({
      list
    })
  }
}

export default App;
