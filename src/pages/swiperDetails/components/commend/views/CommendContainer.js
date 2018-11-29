import React, { Component } from 'react'
import { fromJS } from 'immutable'

import { Commend, CommendLi } from './styledComponent'

class CommendContainer extends Component {
  shouldComponentUpdate(nextProps) {
    if (fromJS(this.props.commend).equals(fromJS(nextProps.commend))) {
      return false
    } else {
      return true
    }
  }

  render() {
    return (
      <Commend>
        {
          this.props.commend.map(item => (
            <CommendLi key={item.suId} {...item}>
              <div className="item-img">
                <img src={item.imageUrl} alt="" />
              </div>
              <div className="item-des">
                <p className="item-price">
                  <i>￥</i>
                  <span className="item-price-int">{item.price}</span>
                </p>
                <p className="item-labels">
                {
                  item.labels.map((label, value) => (
                    <span key={value} style={{background: `${label.color}`, color: `${label.textColor}`, borderColor: `${label.roundColor}`}}>{label.content}</span>
                  ))
                }
                </p>
                <p className="item-bck">{item.subtitle}</p>
                <p className="item-title">{item.title}</p>
                <p className="item-praise escp">{item.evaluate}条好评</p>
                <span className="isShowIcon"></span>
              </div>
            </CommendLi>
          ))
        }
      </Commend>
    )
  }
}

export default CommendContainer