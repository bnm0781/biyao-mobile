import React, { Component, Fragment } from 'react'
import BScroll from 'better-scroll'

import { HeaderContainer as Header} from '../components/header'              // 首页头部组件
import { SwiperContainer as Swiper } from '../components/swiper'             // 轮播图组件
import { GuaranteeContainer as Guarantee } from '../components/guarantee'    // 保证书组件
import { OperateContainer as Operate } from '../components/operate'          // 分类列表组件
import { CommendContainer as Commend } from '../components/commend'          // 为你推荐组件

class HomeContainer extends Component {
  componentDidMount() {
    // 除首页头部外滑动效果
    this.homeScroll = new BScroll(this.homeScrollEl, {
      click: true,
      scrollY: true
    })
  }

  render() {
    return (
      <Fragment>
        <Header></Header>
        <div style={{height: '100%'}} ref={el => this.homeScrollEl = el}>
          <div style={{paddingTop: '1.6rem'}}>
            <Swiper></Swiper>
            <Guarantee></Guarantee>
            <Operate></Operate>
            <Commend></Commend>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default HomeContainer