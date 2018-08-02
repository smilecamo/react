import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import {
  LoginWrapper,
  LoginBox,
  Input,
  Button,
} from './style.js'
class Login extends PureComponent{
  render(){
    return (
      <div>
        <LoginWrapper>
          <LoginBox>
            <Input
            placeholder='请输入账号'
            innerRef={(input)=> {this.userName=input}}
            />
            <Input
            placeholder='请输入密码'
            type='password'
            innerRef={(input)=>{this.passWold=input}}
            />
            <Button onClick={()=>{this.props.login(this.userName,this.passWold)}}>登录</Button>
          </LoginBox>
        </LoginWrapper>
      </div>
    )
  }
}
const mapState = (state) => {
  return {
    
  }
}
const mapDispatch = (dispatch) => {
  return {
    login(userName,passWold){
      console.log(userName.value, passWold.value);
    }
  }
}
export default connect(mapState,mapDispatch)(Login)