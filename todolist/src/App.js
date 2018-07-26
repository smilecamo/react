import React, { Component,Fragment} from 'react';
import { CSSTransition ,TransitionGroup} from 'react-transition-group'
import './style.css'
class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      list: []
    }
    this.handleAddItem = this.handleAddItem.bind(this)
  }
  render() {
    return (
      // in 定义如何进行动画
      // onEntered 钩子入场动画结束时
      // appear 初始时执行的动画
      <Fragment>
        <TransitionGroup>
          {
            this.state.list.map((item,index)=>{
            return(
              <CSSTransition
              in={this.state.show}
              classNames='fade'
              timeout={1000}
              onEntered={(el) => {el.style.color='red'}}
              appear={true}
              key={index}
              >
              <div>{item}</div>
              </CSSTransition>
            )
          })}
        </TransitionGroup>
      <button onClick= {this.handleAddItem}>toggle</button>
      </Fragment>
    );
  }
  handleAddItem(){
    this.setState((prevState)=>{
      return {
        list: [...prevState.list,'item']
      }
    })
  }
}

export default App;
