import React, { Component } from 'react'

import { Range } from './styledComponent'

class RangeContainer extends Component {
  render() {
    return (
      <Range>
        <div className="standard">
					<span>已选择：&nbsp;</span>
					<div className="choosed-size-Exhibition">一盒，1件</div>
				</div>
        <span className="gl-more">
          <svg className="icon"><svg id="icon-forward" viewBox="0 0 1024 1024" width="100%" height="100%"><path d="M792.413 511.827l-48.76299999999999-48.79300000000001-0.20900000000000005 0.2069999999999999-463.0909999999998-463.1290000000001-48.763000000000005 48.762999999999984 463.0959999999999 463.12600000000003-463.0960000000001 463.1299999999998 48.76299999999999 48.75700000000001 512.0620000000001-512.0609999999998zM792.413 511.827z"></path></svg></svg>
        </span>
      </Range>
    )
  }
}

export default RangeContainer