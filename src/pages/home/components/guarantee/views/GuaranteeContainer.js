import React, { Component } from 'react';

import { Guarantee } from './styledComponent'

class GuaranteeContainer extends Component {
  shouldComponentUpdate(nextProps) {
    if (!!nextProps) {
      return false
    } else {
      return true
    }
  }

  render() {
    return (
      <Guarantee>
        <p>
          <span>大牌制造商直供</span>
          <span>七天无忧退货</span>
          <span>全平台包邮</span>
        </p>
      </Guarantee>
    );
  }
}

export default GuaranteeContainer;