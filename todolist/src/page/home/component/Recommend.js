import React, { PureComponent } from 'react';
import { connect } from 'react-redux'
import { RecommendWrapper, RecommendItem} from '../style.js'
class Recommend extends PureComponent {
  render() {
    return (
      <div>
        <RecommendWrapper>
          {
            this.props.list.map((item)=>{
              return (<RecommendItem key={item.get('id')} imgUrl={item.get('imgUrl')} />)
            })
          }
        </RecommendWrapper>
      </div>
    )
  }
}
const mapState = (state) => ({
  list: state.getIn(['home','recommentList'])
})
export default connect(mapState,null)(Recommend)