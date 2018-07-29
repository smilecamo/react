import React from 'react'
import { Input, Button, List} from 'antd';
// 无状态组件 只有一个render(){}
const AppUI = (props) => {
  return(
    <div>
        <Input
        value={props.inputValue}
        placeholder='Todo it'
        style={{width:'240px',marginTop: '20px',marginRight: '20px'}} 
        onChange={props.handleInputChange}
        />
        <Button type='primary'
        onClick={props.handleBtnClick}
        >提交</Button>
        <List
          style={{marginTop:'20px',width:'240px'}}
          bordered
          dataSource={props.list}
          renderItem={(item, index)=> (<List.Item onClick={()=>{props.handleClickItem(index)}}>{item}</List.Item>)}
        />
      </div>
  )
}
// class AppUI extends Component {
//   render(){
//     return(
//       <div>
//         <Input
//         value={this.props.inputValue}
//         placeholder='Todo it'
//         style={{width:'240px',marginTop: '20px',marginRight: '20px'}} 
//         onChange={this.props.handleInputChange}
//         />
//         <Button type='primary'
//         onClick={this.props.handleBtnClick}
//         >提交</Button>
//         <List
//           style={{marginTop:'20px',width:'240px'}}
//           bordered
//           dataSource={this.props.list}
//           renderItem={(item, index)=> (<List.Item onClick={(index)=>{this.props.handleClickItem(index)}}>{item}</List.Item>)}
//         />
//       </div>
//     )
//   }
// }

export default AppUI