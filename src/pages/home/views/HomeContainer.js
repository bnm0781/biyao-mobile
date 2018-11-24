import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import BScroll from 'better-scroll'

import { HeaderContainer as Header} from '../components/header'                    // 首页头部组件
import { SwiperContainer as Swiper } from '../components/swiper'                   // 轮播图组件
import { GuaranteeContainer as Guarantee } from '../components/guarantee'          // 保证书组件
import { OperateContainer as Operate } from '../components/operate'                // 分类列表组件
import { FloorsContainer as Floors } from '../components/floors'                   // 楼梯组件
import { CommendContainer as Commend } from '../components/commend'                // 为你推荐组件
import { GroupBuyingContainer as GroupBuying } from '../components/groupBuying'    // 拼团组件

import { commendListDataAsync, commendListDataAsyncAgain } from '../actionCreator'

const mapDispatch = (dispatch) => {
  return {
    getCommendList(homeScroll, pageIndex) {
      dispatch(commendListDataAsync(dispatch, homeScroll, pageIndex))
    },
    getCommendListAgain(homeScroll, pageIndex) {
      dispatch(commendListDataAsyncAgain(dispatch, homeScroll, pageIndex))
    }
  }
}

class HomeContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pageIndex: 1,
      isLoading: '上拉加载更多',
      isShow: true
    }
  }

  componentDidMount() {
    // 除首页头部外滑动效果
    this.homeScroll = new BScroll(this.homeScrollEl, {
      click: true,
      scrollY: true,
      probeType: 1,
      pullUpLoad: {
        threshold: 50
      }
    })

    // 加载第一页数据
    this.props.getCommendList(this.homeScroll, this.state.pageIndex)
    this.setState(state => ({
      ...state,
      pageIndex: state.pageIndex + 1
    }))

    // 通过上拉加载判断是否请求数据
    this.homeScroll.on('pullingUp', () => {
      if (this.state.pageIndex < 7) {
        this.props.getCommendListAgain(this.homeScroll, this.state.pageIndex)
        this.setState(state => ({
          ...state,
          pageIndex: state.pageIndex + 1
        }))
        this.homeScroll.finishPullUp()
      } else {
        this.setState(state => ({
          ...state,
          isLoading: '没有更多数据了'
        }))
      }
    })

    // 监听滚动事件
    this.homeScroll.on('scroll', (position) => {
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
      <Fragment>
        <Header></Header>
        <div style={{height: '100%'}} ref={el => this.homeScrollEl = el}>
          <div id="homeScroll" style={{paddingTop: '1.6rem'}}>
            <Swiper></Swiper>
            <Guarantee></Guarantee>
            <Operate></Operate>
            <Floors></Floors>
            <Commend homeScroll={this.homeScroll}></Commend>
            <div style={{
              height: '1rem',
              lineHeight: '1rem',
              textAlign: 'center',
              color: 'gray'
            }}>{this.state.isLoading}</div>
          </div>
        </div>
        {/* <GroupBuying isShow={this.state.isShow} ></GroupBuying> */}
      </Fragment>
    );
  }
}

export default connect(null, mapDispatch)(HomeContainer)