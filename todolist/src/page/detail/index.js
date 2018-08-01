import React, { Component } from 'react';
import { connect } from 'react-redux'
import  * as actionCreate  from './store/actionCreate'
import { DetailWrapper, DetailTitle, DetailDesc } from './style'
class Detail extends Component {
  render() {
    const { title ,desc } = this.props
    return (
      <div>
        <DetailWrapper>
          <DetailTitle>{title}</DetailTitle>
          <DetailDesc
            dangerouslySetInnerHTML={{__html: desc}}>
          </DetailDesc>
        </DetailWrapper>
      </div>
    )
  }
  componentDidMount(){
    this.props.getDeatil(this.props.match.params.id)
  }
}
const setState = (state) => ({
  title: state.getIn(['detail','title']),
  desc: state.getIn(['detail','desc'])
})
const setDispatch = (dispatch) => ({
  getDeatil(id){
    dispatch(actionCreate.getDeatil(id))
  }
})
export default connect(setState, setDispatch)(Detail)