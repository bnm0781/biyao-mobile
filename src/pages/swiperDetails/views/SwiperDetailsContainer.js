import React, { Component } from 'react'
import BScroll from 'better-scroll'
import { withRouter } from 'react-router-dom'
import qs from 'qs'

import { SwiperDetails } from './styledComponent'
import { HeaderContainer as Header } from '../components/header'            // 头部组件
import { SupHeaderContainer as SupHeader} from '../components/supHeader'    // 商家信息组件
import { CommendContainer as Commend } from '../components/commend'         // 商品列表组件
import { TopContainer as Top } from 'common/top'                            // 返回顶部组件

class SwiperDetailsContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      productList: [],            // 商品列表
      pageIndex: 1,               // 当前获取数据的页数
      isLoading: '上拉加载更多',    // 底部渲染文字内容
      isShow: true                // 是否显示返回顶部按钮
    }
  }

  componentDidMount() {
    // 添加滚动效果
    this.scroll = new BScroll(this.scrollEl, {
      click: true,
      scrollY: true,
      probeType: 1,
      pullUpLoad: {
        threshold: 50
      }
    })

    // 加载第一页数据
    let supplierID = this.props.location.state.supplierID
    this.getSupplierData(this.state.pageIndex, supplierID)
    this.setState(state => ({
      pageIndex: state.pageIndex + 1
    }))

    // 上拉加载
    this.scroll.on('pullingUp', () => {
      if (this.state.pageIndex < this.pageCount) {
        this.getSupplierData(this.state.pageIndex, supplierID)
        this.setState(state => ({
          pageIndex: state.pageIndex + 1
        }), () => {
          this.scroll.refresh()
        })
        this.scroll.finishPullUp()
      } else {
        this.setState({isLoading: '没有更多数据了'}, () => {
          this.scroll.refresh()
        })
      }
    })

    // 监听滚动事件
    this.scroll.on('scroll', (position) => {
      if (position.y > -650) {
        this.setState({isShow: true})
      } else {
        this.setState({isShow: false})
      }
    })
  }

  getSupplierData(pageIndex, supplierID) {
    fetch('/api//classify/getMoreProduct', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8;'
      },
      body: qs.stringify({
        pageIndex,
        pageSize: 20,
        supplierID
      })
    })
      .then(response => response.json())
      .then(result => {
        this.header = result.data.listTitle
        this.supHeader = result.data.header
        this.pageCount = result.data.pageCount
        this.setState(state => ({
          productList: [...state.productList, ...result.data.productList]
        }))
      })
  }

  render() {
    return (
      <SwiperDetails>
        <Header header={this.header}></Header>
        <div style={{height: '100%'}} ref={el => this.scrollEl = el}>
          <div style={{paddingTop: '.84rem'}}>
            <SupHeader supHeader={this.supHeader} header={this.header}></SupHeader>
            <Commend commend={this.state.productList}></Commend>
            <div style={{
              height: '1rem',
              lineHeight: '1rem',
              textAlign: 'center',
              color: 'gray'
            }}>{this.state.isLoading}</div>
          </div>
        <Top isShow={!this.state.isShow} scroll={this.scroll}></Top>
        </div>
      </SwiperDetails>
    )
  }
}

export default withRouter(SwiperDetailsContainer)