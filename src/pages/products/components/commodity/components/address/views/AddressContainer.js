import React, { Component } from 'react'

import { Address } from './styledComponent'

class AddressContainer extends Component {
  render() {
    return (
      <Address>
        <div className="padding">
          <div className="my-send clear">
						<b>配送至：&nbsp;</b>
						<span className="gl-location">
							<img src="https://static.biyao.com/m/img/product/dingwei.png?v=biyao_0dc5b9b" alt="" />
						</span>
						<b id="distribution-location">北京市 市辖区 东城区 </b>
					</div>
          <div className="location-til">
						<b>配送至：&nbsp;</b>
						<span>可配送</span>
					</div>
        </div>
        <span className="gl-more">
          <svg className="icon"><svg id="icon-forward" viewBox="0 0 1024 1024" width="100%" height="100%"><path d="M792.413 511.827l-48.76299999999999-48.79300000000001-0.20900000000000005 0.2069999999999999-463.0909999999998-463.1290000000001-48.763000000000005 48.762999999999984 463.0959999999999 463.12600000000003-463.0960000000001 463.1299999999998 48.76299999999999 48.75700000000001 512.0620000000001-512.0609999999998zM792.413 511.827z"></path></svg></svg>
        </span>
      </Address>
    )
  }
}

export default AddressContainer