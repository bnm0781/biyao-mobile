import React, { Component } from 'react'

import { Detial } from './styledComponent'

class DetialContainer extends Component {
  render() {
    return (
      <Detial>
        <div className="gl-detial-wrap">
          <div className="gl-title">发热贴暖宝宝 暖手暖足暖身 生理期驱寒贴 缓解痛经腰酸 30pcs/盒</div>
          <div className="gl-salePoint">寒冬必备，恒温发热，超长持续，生理期暖宫贴，缓解身体部位酸疼</div>
          <div id="collectSign" className="collectSign">
            <i></i>
            <p className="collectText">收藏</p>
          </div>
          <div className="price-duration-wrap">
            <div className="gl-price-duration-wrap">
              <div className="gl-price">￥<span>79</span></div>
            </div>
            <div className="gl-duration-wrap">
              <span className="gl-duration-icon">
                <img src="https://static.biyao.com/m/img/base/produce_cycle.png?v=biyao_015ebc2" alt=""/>
              </span>
              <span className="gl-duration">生产周期：7天</span>
            </div>
          </div>
          <div className="maker-label">
            <span className="labels">HENKEL制造商直供</span>
          </div>
        </div>
      </Detial>
    )
  }
}

export default DetialContainer