import styled from 'styled-components'
import logoPic from '../../statics/logo.png'
export const Div = styled.div`
  border-bottom: 1px solid #ccc;
`
export const HeaderWrapper = styled.div`
  position: relative;
  width: 1440px;
  height: 58px;
  margin: 0 auto;
`
export const Logo = styled.a`
  position: absolute;
  top: 0;
  left: 0;
  display: block;
  width: 100px;
  height: 58px;
  background: url(${logoPic});
  /* background-size 属性规定背景图像的尺寸 */
  background-size: contain;
`
export const Nav = styled.div`
  width: 960px;
  height: 100%;
  padding-right: 70px;
  box-sizing: border-box;
  margin: 0 auto;
`
export const SearchWrapper = styled.div`
  position: relative;
  float: left;
  .iconfont{
    position: absolute;
    right: 15px;
    bottom: 5px;
    width: 30px;
    line-height: 30px;
    border-radius: 15px;
    text-align: center;
    &.focused{
    background: #ccc;
    color: #fff;
    right: 5px;
    }
  }
`

export const NavItem = styled.div`
  line-height: 56px;
  padding: 0 15px;
  font-size: 17px;
  color: #333;
  &.left{
    float: left;
  }
  &.right{
    float: right;
    color: #969696;
  }
  &.active{
    color: #ea6f5a;
  }
`
export const NavSearch = styled.input.attrs({
  placeholder: '搜索'
})`
  &.slider-enter{
    width: 196px;
    transition: all .5s ease-out;
  }
  &.slide-enter-active{
    width: 250px;
  }
  &.slider-exit{
    transition: all .5s ease-out;
  }
  &.slider-exit-active{
    width: 196px;
  }
  width: 196px;
  height: 38px;
  padding: 0 45px 0 20px;
  margin-left: 20px;
  border: none;
  outline: none;
  border-radius: 19px;
  background: #eee;
  margin-top: 9px;
  box-sizing: border-box;
  font-size: 14px;
  color: #777;
  &::placeholder{
    color: #999;
  }
  &.focused{
    width: 250px;
  }
`

export const SearchInfo = styled.div`
  position: absolute;
  left: 0;
  top: 58px;
  width: 240px;
  padding: 0 20px;
  box-shadow: 0 0 8px rgba(0,0,0,.2);
  background: #fff;
`
export const SearchTitle = styled.span`
  display: inline-block;
  margin-top: 20px;
  margin-bottom: 15px;
  line-height: 20px;
  font-size: 14px;
  color: #333;
`
export const SearchInfoSwitch = styled.a`
  display: inline-block;
  float: right;
  margin-top: 20px;
  margin-bottom: 15px;
  line-height: 20px;
  font-size: 12px;
  color: #969696;
`;
export const SearchInfoList = styled.div`
  overflow:hidden;
`
export const SearchInfoItem = styled.a`
  display: inline-block;
  line-height: 20px;
  padding: 0 5px;
  margin-right: 10px;
  margin-bottom: 10px;
  font-size: 12px;
  border: 1px solid #ddd;
  color: #777;
  float: left;
  border-radius: 2px;
`
export const Addition = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  height: 56px;
`
export const Button = styled.div`
  float: right;
  margin-top: 9px;
  margin-right: 20px;
  padding: 0 20px;
  line-height: 38px;
  border-radius: 19px;
  font-size: 14px;
  border: 1px solid rgba(236,97,73,.7);
  &.reg{
    color: #ea6f5a;
  }
  &.writting{
    background: #ea6f5a;
    color: #fff;
  }
`