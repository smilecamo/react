import styled from 'styled-components'
import logoPic from '../../src/statics/img/logo.png'
export const Headerwrapper = styled.div`
  height: 56px;
  border-bottom: 2px solid #f0f0f0;
`
export const Logo = styled.a.attrs({
  href: '/'
}) `
  display: inline-block;
  position: absolute;
  top: 0;
  left: 0;
  width: 100px;
  height: 56px;
  background: url(${logoPic});
  background-size: contain;
`

export const Nav = styled.div`
  width: 960px;
  height: 100%;
  padding-right: 90px;
  box-sizing: border-box;
  margin: 0 auto;
`

export const NavItem = styled.div `
  line-height: 56px;
  padding: 0 15px;
  font-size: 17px;
  color: #333;
  &.left{
    float: left;
  }
  &.right{
    float: right;
    color:rgb(150, 150, 150);
  }
  &.active{
    color: #ea6f5a;
  }
`
export const NavSearchWrap = styled.div `
  position: relative;
  float: left;
  .slider-enter{
    transition: all .2s ease-out
  }
  .slider-enter-active{
    width: 240px
  }
  .slider-exit{
    transition: all .2s ease-out
  }
  .slider-exit-active{
    width: 160px;
  }
  .iconfont{
    position: absolute;
    right: 5px;
    bottom: 5px;
    width: 30px;
    height: 30px;
    border-radius: 15px;
    line-height:30px;
    text-align:center;
    &.foucused{
      background: #777;
      color: #fff;
    }
  }
`;

export const SearchInfo = styled.div`
  position: absolute;
  left: 0;
  top: 56px;
  width: 260px;
  padding: 20px 20px 10px;
  box-sizing: border-box;
  background-color: #fff;
  box-shadow: 0 0 8px rgba(0,0,0,.2);
`;

export const SearchTitle = styled.div`
  font-size: 14px;
  color: #969696;
  padding-bottom: 10px;
`

export const SearchInfoSwitch = styled.a`
  float: right;
`
export const SearchItem = styled.a `
  display: block;
  float: left;
  line-height: 20px;
  margin: 2px 5px;
  padding: 0 5px;
  font-size: 12px;
  border: 1px solid #ddd;
  color: #333;
  border-radius: 3px;
`

export const NavSearch = styled.input.attrs({
  placeholder:'搜索'
})`
  width: 160px;
  height: 38px;
  padding-left: 20px;
  padding-right: 40px;
  margin-top: 9px;
  box-sizing: border-box;
  border: none;
  outline: none;
  border-radius: 19px;
  background: rgb(238, 238, 238);
  color: #333;
  &::placeholder{
    color: #999;
  }
  &.foucused{
    width: 250px;
  }
`

export const Addition = styled.div`
  position: absolute;
  right: 0;
  top: 0;
`

export const Button = styled.div`
  float: right;
  margin-top: 9px;
  margin-right: 20px;
  padding: 12px 24px;
  border-radius: 20px;
  border: 1px solid rgba(236, 97, 73, 0.7);
  font-size: 15px;
  &.reg{
    color: rgba(236, 97, 73, 0.7);
  }
  &.write{
    color: #fff;
    background: #ea6f5a;
  }
`