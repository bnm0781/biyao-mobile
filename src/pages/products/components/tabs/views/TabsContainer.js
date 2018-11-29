import React, { Component } from 'react'

import {Tabs} from './styledComponent'

class TabsContainer extends Component {
  render() {
    return (
      <Tabs>
        <li className="commodity"><img src="https://static.biyao.com/m/img/product/dingwei.png?v=biyao_0dc5b9b" alt=""/>商品</li>
        <li className="evaluate"><img src="https://static.biyao.com/m/img/product/dingwei.png?v=biyao_0dc5b9b" alt=""/>评价</li>
        <li className="details"><img src="https://static.biyao.com/m/img/product/dingwei.png?v=biyao_0dc5b9b" alt=""/>详情</li>
        <li className="recommend"><img src="https://static.biyao.com/m/img/product/dingwei.png?v=biyao_0dc5b9b" alt=""/>推荐</li>
      </Tabs>
    )
  }
}

export default TabsContainer