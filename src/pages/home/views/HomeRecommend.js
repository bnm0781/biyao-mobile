import React, { Component } from 'react';

import { SwiperContainer as Swiper } from '../components/swiper'                   // 轮播图组件
import { GuaranteeContainer as Guarantee } from '../components/guarantee'          // 保证书组件
import { OperateContainer as Operate } from '../components/operate'                // 分类列表组件
import { FloorsContainer as Floors } from '../components/floors'                   // 楼梯组件
import { CommendContainer as Commend } from '../components/commend'                // 为你推荐组件
import { Main } from './styledComponent'

class HomeRecommend extends Component {
  render() {
    return (
      <Main id="homeScroll">
        <Swiper></Swiper>
        <Guarantee></Guarantee>
        <Operate></Operate>
        <Floors></Floors>
        <Commend></Commend>
        <div style={{
          height: '1rem',
          lineHeight: '1rem',
          textAlign: 'center',
          color: 'gray'
        }}>{this.props.isLoading}</div>
      </Main>
    );
  }
}

export default HomeRecommend;