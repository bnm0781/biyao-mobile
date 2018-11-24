import React, { Component } from 'react';
import { connect } from 'react-redux'

import { Commend, CommendList, ItemImg, ItemDes, SingleWrap, ItemPrice, ItemLabels, ItemBck, ItemTitle, ItemPraiseWrap } from './styledComponent'
import { TitleContainer as Title } from 'common/title'     // commend 模块标题组件

const mapState = (state) => {
  return {
    commendList: state.getIn(['home', 'commendList'])
  }
}

class CommendContainer extends Component {
  render() {
    return (
      <Commend>
        <Title titleName="为你推荐" titleColor="#666" borderColor="#aaa"></Title>
        <CommendList>
          {
            this.props.commendList.toJS().map(item => (
              <li key={item.ext.suId}>
                  <ItemImg><img src={item.imageUrl} alt=""/></ItemImg>
                  <ItemDes>
                    <SingleWrap>
                      <ItemPrice>
                        <i>￥</i>
                        <span>{item.price}</span>
                      </ItemPrice>
                      <ItemLabels>
                        {
                          item.labels.map((insideItem, value) => <span key={value} style={{ background: `${insideItem.color}`, color: `${insideItem.textColor}`, borderColor: `${insideItem.roundColor}` }}>{insideItem.content}</span>)
                        }
                      </ItemLabels>
                    </SingleWrap>
                    <ItemBck>{item.supplierBackground}</ItemBck>
                    <p>
                      <ItemTitle>{item.title}</ItemTitle>
                    </p>
                    <ItemPraiseWrap>
                      <p>{item.evaluate}</p>
                    </ItemPraiseWrap>
                  </ItemDes>
              </li>
            ))
          }
        </CommendList>
      </Commend>
    );
  }
}

export default connect(mapState, null)(CommendContainer);