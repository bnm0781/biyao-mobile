import React, { Component } from 'react'
import { fromJS } from 'immutable'

import { SupHeader } from './styledComponent'

class SupHeaderContainer extends Component {
  shouldComponentUpdate(nextProps) {
    if (fromJS(this.props).equals(fromJS(nextProps))) {
      return false
    } else {
      return true
    }
  }

  render() {
    if (!this.props.supHeader) {
      return null
    } else {
      return (
        <SupHeader>
          <div className="supplierDes">
            <span>{this.props.header}</span>
            <i>
              <svg className="icon" aria-hidden="true"><svg id="icon-right" viewBox="0 0 1024 1024" width="100%" height="100%"><path d="M384 768c-4.266667 0-10.666667-2.133333-14.933333-6.4-8.533333-8.533333-8.533333-19.2 0-27.733333L597.333333 512 371.2 290.133333c-8.533333-8.533333-8.533333-19.2 0-27.733333s19.2-8.533333 27.733333 0L631.466667 490.666667c6.4 6.4 8.533333 12.8 8.533333 21.333333s-2.133333 14.933333-8.533333 21.333333l-234.666667 228.266667c-2.133333 4.266667-8.533333 6.4-12.8 6.4z" fill="#808080"></path></svg></svg>
            </i>
          </div>
          <ul className="supplier-commend">
            <li>
              <p>
                <img src={this.props.supHeader.imageUrl} alt=""/>
              </p>
              <div className="item-des">
                <p className="item-price">
                  <i>￥</i>
                  <span className="item-price-int">{parseInt(this.props.supHeader.priceStr)}</span>
                </p>
                <p className="item-labels">
                {
                  this.props.supHeader.labels.map((item, value) => (
                    <span key={value} style={{
                      background: `${item.color}`,
                      color: `${item.textColor}`,
                      borderColor: `${item.roundColor}`
                    }}>{item.content}</span>
                  ))
                }
                </p>
                <p className="item-bck">{this.props.supHeader.supplierBackground}</p>
                <p className="item-title">{this.props.supHeader.title}</p>
                <p className="item-salepoint">{this.props.supHeader.salePoint}</p>
              </div>
            </li>
          </ul>
        </SupHeader>
      )
    }
  }
}

export default SupHeaderContainer