import React, { Component } from 'react';
import { connect } from 'react-redux'
import BScroll from 'better-scroll'

import { SwiperContainer as Swiper } from '../components/swiper'                   // 轮播图组件
import { GuaranteeContainer as Guarantee } from '../components/guarantee'          // 保证书组件
import { OperateContainer as Operate } from '../components/operate'                // 分类列表组件
import { FloorsContainer as Floors } from '../components/floors'                   // 楼梯组件
import { CommendContainer as Commend } from '../components/commend'                // 为你推荐组件
import { GroupBuyingContainer as GroupBuying } from '../components/groupBuying'    // 拼团组件
import { Main } from './styledComponent'

import { commendListDataAsync, commendListDataAsyncAgain } from '../actionCreator'

const mapDispatch = (dispatch) => {
  return {
    getCommendList(recommendScroll, pageIndex) {
      dispatch(commendListDataAsync(dispatch, recommendScroll, pageIndex))
    },
    getCommendListAgain(recommendScroll, pageIndex) {
      dispatch(commendListDataAsyncAgain(dispatch, recommendScroll, pageIndex))
    }
  }
}

class HomeRecommend extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pageIndex: 1, // 上拉加载时所要传递的 Form Date 参数
      isLoading: '上拉加载更多', // 推荐页面底部所渲染的文字
      isShow: true // 判断是否显示团购弹幕，true 为显示，false 为不显示
    }
  }

  componentDidMount() {
    // 除首页头部外滑动效果
    this.recommendScroll = new BScroll(this.recommendScrollEl, {
      click: true,
      scrollY: true,
      probeType: 1,
      pullUpLoad: {
        threshold: 50
      }
    })

    // 加载第一页数据
    this.props.getCommendList(this.recommendScroll, this.state.pageIndex)
    this.setState(state => ({
      ...state,
      pageIndex: state.pageIndex + 1
    }))

    // 通过上拉加载判断是否请求数据
    this.recommendScroll.on('pullingUp', () => {
      if (this.state.pageIndex < 7) {
        this.props.getCommendListAgain(this.recommendScroll, this.state.pageIndex)
        this.setState(state => ({
          ...state,
          pageIndex: state.pageIndex + 1
        }))
        this.recommendScroll.finishPullUp()
      } else {
        this.setState(state => ({
          ...state,
          isLoading: '没有更多数据了'
        }))
      }
    })

    // 监听滚动事件
    this.recommendScroll.on('scroll', (position) => {
      // 如果滚动的距离小于650，使团购弹幕显示
      // 大于650，使其隐藏
      if ( position.y > -650) {
        this.setState(state => ({
          ...state,
          isShow: true
        }))
      } else {
        this.setState(state => ({
          ...state,
          isShow: false
        }))
      }
    })
  }

  render() {
    return (
      <div style={{height: '100%'}} ref={el => this.recommendScrollEl = el}>
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
          }}>{this.state.isLoading}</div>
        </Main>
        {/* <GroupBuying isShow={this.state.isShow} ></GroupBuying> */}
      </div>
    )
  }
}

export default connect(null, mapDispatch)(HomeRecommend);