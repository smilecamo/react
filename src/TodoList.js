import React, { Fragment } from 'react';
import { connect } from 'react-redux'
import {
  CHANGE_INPUT_VALUE,
  CHANGE_LIST,
  DEL_LIST
} from './store/actionTypes'
const TodoList = (props) => {
  const {
    inputValue,
    handleChangeInput,
    handleBtnClick,
    list,
    handleDle
  } = props
  return (
    <Fragment>
      <div>
        <input
          value={inputValue}
          onChange={handleChangeInput}
          type="text"/>
        <button
          onClick={handleBtnClick}
        >提交</button>
      </div>
      <ul>
        {
          list.map((item,index) => {
            return (
              <li key={index}
                onClick={()=>{
                  handleDle(index)
                }}
              >{item}</li>
            )
          })
        }
      </ul>
    </Fragment>
  )
}

const mapStateToProps = state => {
  return {
    inputValue: state.inputValue,
    list: state.list
  }
}
const mapDispatchToProps = (dispatch) => {
  return{
    handleChangeInput(e) {
      const action = {
        type: CHANGE_INPUT_VALUE,
        value: e.target.value
      }
      dispatch(action)
    },
    handleBtnClick() {
      const action = {
        type: CHANGE_LIST
      }
      dispatch(action)
    },
    handleDle(index){
      const action = {
        type: DEL_LIST,
        index
      }
      dispatch(action)
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(TodoList)