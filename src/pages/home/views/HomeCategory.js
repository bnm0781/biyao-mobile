import React, { Component } from 'react';
import { connect } from 'react-redux'
import BScroll from 'better-scroll'

import { Category, CategoryList } from './styledComponent'

const mapState = (state) => {
  return {
    categoryList: state.getIn(['nav', 'categoryList'])
  }
}

class HomeCategory extends Component {
  componentDidMount() {
    // 页面滑动效果
    this.categoryScroll = new BScroll(this.categoryScrollEl, {
      click: true,
      scrollX: true
    })
  }

  render() {
    return (
      <div style={{height: '100%'}} ref={el => this.categoryScrollEl = el}>
        <Category>
          {
            this.props.categoryList.toJS().map(list => (
              <CategoryList key={list.categoryName}>
                <p className="cateName">{list.categoryName}</p>
                <ul className="productList">
                  {
                    list.item.map(item => (
                      <li className="item" key={item.productId}>
                        <div className="item-img">
                          <img src={item.imageUrl} alt=""/>
                        </div>
                        <div className="item-des">
                          <p className="item-price">
                            <i>￥</i>
                            <span className="item-price-int">{item.price}</span>
                          </p>
                          <p className="item-labels">
                            {
                              item.labels.map(label => (
                                <span key={label.content} style={{background: `${label.color}`, color: `${label.textColor}`, borderColor: `${label.roundColor}`}}>{label.content}</span>
                              ))
                            }
                          </p>
                          <p className="item-bck">{item.subtitle}</p>
                          <p className="item-title">{item.title}</p>
                          <p className="item-praise">{item.evaluate}条好评</p>
                        </div>
                      </li>
                    ))
                  }
                </ul>
              </CategoryList>
            ))
          }
        </Category>
      </div>
    );
  }
}

export default connect(mapState, null)(HomeCategory)