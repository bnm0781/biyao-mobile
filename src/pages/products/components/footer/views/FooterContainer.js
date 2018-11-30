import React, { Component } from 'react'

import { Footer } from './styledComponent'

class FooterContainer extends Component {
  render() {
    return (
      <Footer>
        <div className="gl-other-wrap">
          <div className="customer-service">
            <i className="gl-icon">
              <svg className="icon" aria-hidden="true"><svg id="icon-service" viewBox="0 0 1024 1024" width="100%" height="100%"><path d="M509.866667 104.533333c-260.266667 0-469.333333 153.6-469.333334 343.466667 0 138.666667 110.933333 256 270.933334 311.466667v155.733333L618.666667 780.8c206.933333-36.266667 360.533333-170.666667 360.533333-332.8 0-189.866667-209.066667-343.466667-469.333333-343.466667z m100.266666 635.733334h-4.266666l-4.266667 2.133333-245.333333 108.8V729.6l-29.866667-10.666667C179.2 667.733333 83.2 561.066667 83.2 448c0-166.4 192-300.8 426.666667-300.8s426.666667 134.4 426.666666 300.8c0 136.533333-136.533333 258.133333-326.4 292.266667z" fill="#808080"></path><path d="M704 362.666667H320c-12.8 0-21.333333 8.533333-21.333333 21.333333s8.533333 21.333333 21.333333 21.333333h384c12.8 0 21.333333-8.533333 21.333333-21.333333s-8.533333-21.333333-21.333333-21.333333zM533.333333 533.333333H320c-12.8 0-21.333333 8.533333-21.333333 21.333334s8.533333 21.333333 21.333333 21.333333h213.333333c12.8 0 21.333333-8.533333 21.333334-21.333333s-8.533333-21.333333-21.333334-21.333334z" fill="#808080"></path></svg></svg>
            </i>
            <span className="gl-service-text">客服</span>
          </div>
          <div className="shop-car">
            <i className="gl-icon">
              <svg className="icon" aria-hidden="true"><svg id="icon-shopcar" viewBox="0 0 1024 1024" width="100%" height="100%"><path d="M384 832m-64 0a64 64 0 1 0 128 0 64 64 0 1 0-128 0Z" fill="#4A4A4A"></path><path d="M768 832m-64 0a64 64 0 1 0 128 0 64 64 0 1 0-128 0Z" fill="#4A4A4A"></path><path d="M691.2 345.6l25.6 34.133333 174.933333-123.733333-36.266666 426.666667H296.533333L256 211.2l-2.133333-19.2H0v42.666667H215.466667l42.666666 490.666666h635.733334l49.066666-556.8z" fill="#4A4A4A"></path></svg></svg>
            </i>
            <span className="gl-shop-car-text">购物车</span>
          </div>
        </div>
        <div className="choose-gl-btn">
          <ul className="choose-bottom-btn-wrap">
            <li className="buy-shopcar">加入购物车</li>
            <li className="buy-now">立即购买</li>
          </ul>
        </div>
      </Footer>
    )
  }
}

export default FooterContainer