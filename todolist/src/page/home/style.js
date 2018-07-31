import styled from 'styled-components';

export const HomeWrapper = styled.div`
  width: 960px;
  margin: 0 auto;
  overflow: hidden;
`
export const HomeLeft = styled.div`
  float: left;
  width: 625px;
  margin-left: 15px;
  padding-top: 30px;
  box-sizing: border-box;
  .banner-img {
    width: 625px;
    height: 270px;
    border-radius: 5px;
  }
`
export const HomeRight = styled.div`
  float: right;
  width: 280px;
  box-sizing: border-box;
  padding-top: 30px;
  margin-left: 15px;
`

// 局部Topic
export const TopicWrapper = styled.div`
  overflow: hidden;
  padding: 20px 0 10px 0;
  margin-left: -18px;
  border-bottom: 1px solid #dcdcdc;
`
export const TopicItem = styled.div`
  float: left;
  background: #f7f7f7;
  height: 32px;
  line-height: 32px;
  font-size: 14px;
  padding-right: 10px;
  margin-left: 18px;
  margin-bottom: 18px;
  border: 1px solid #dcdcdc;
  box-sizing: border-box;
  border-radius: 4px;
  .topic-img{
    display: block;
    float: left;
    width: 32px;
    height: 32px;
    margin-right: 10px;
  }
`
export const ListItem = styled.div`
  overflow: hidden;
  width: 625px;
  height: 140px;
  padding: 20px 0;
  border-bottom: 1px solid #dcdcdc;
  .title{
    line-height: 27px;
    font-size: 18px;
    font-weight: bold;
    color: #333;
  }
  .desc{
    line-height: 18px;
    font-size: 13px;
    color: #999;
  }
  .listImg{
    width: 125px;
    height: 100px;
    display: block;
    float: right;
    border-radius: 5px;
  }
`
export const ListInfo = styled.div `

`
export const RecommendWrapper = styled.div`
  width: 280px;
  /* margin: 30px 0; */
`
export const RecommendItem = styled.div`
  width: 280px;
  height: 50px;
  background: url(${(props)=>props.imgUrl});
  background-size: contain;
`