import React, { Component } from 'react';
import { connect } from 'react-redux'

import { Commend, CommendList, ItemImg, ItemDes, SingleWrap, ItemPrice, ItemLabels, ItemBck, ItemTitle, ItemPraiseWrap } from './styledComponent'
import { TitleContainer as Title } from 'common/title'     // commend 模块标题组件

import { commendListDataAsync } from '../actionCreator'

const mapState = (state) => {
  return {
    commendList: state.commend.commendList
  }
}

const mapDispatch = (dispatch) => {
  return {
    getCommendList() {
      dispatch(commendListDataAsync(dispatch))
    }
  }
}

class CommendContainer extends Component {
  constructor() {
    super();
  }

  componentDidMount() {
    this.props.getCommendList()
  }

  render() {
    return (
      <Commend>
        <Title titleName="为你推荐" titleColor="#666" borderColor="#aaa"></Title>
        <CommendList>
          {
            this.props.commendList.map(item => (
              <li key={item.ext.suId}>
                <a href="javascript:void(0)">
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
                </a>
              </li>
            ))
          }
        </CommendList>
      </Commend>
    );
  }
}

export default connect(mapState, mapDispatch)(CommendContainer);