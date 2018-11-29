import React, { Component } from 'react';
import BScroll from 'better-scroll'
import { withRouter } from 'react-router-dom'
import qs from 'qs'

import { Category, CategoryList } from './styledComponent'
import { TopContainer as Top } from 'common/top'              // 返回顶部组件

class HomeCategory extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categoryList: [],    // 分类列表需要渲染的数据
      isShow: true         // 判断是否显示团购弹幕，true 为显示，false 为不显示
    }

    this.getCategoryList = this.getCategoryList.bind(this)
  }

  componentDidMount() {
    // 刷新页面后显示当前路径所所展示的内容
    let categoryId = this.props.location.state.category
    this.getCategoryList(categoryId)

    // 页面滑动效果
    this.categoryScroll = new BScroll(this.categoryScrollEl, {
      click: true,
      scrollY: true,
      probeType: 1
    })

    // 监听滚动事件
    this.categoryScroll.on('scroll', (position) => {
      console.log(0);
      // 如果滚动的距离小于650，使团购弹幕显示
      // 大于650，使其隐藏
      if ( position.y > -650) {
        this.setState({isShow: true})
      } else {
        this.setState({isShow: false})
      }
    })

    this.categoryScroll.refresh()
  }

  componentWillReceiveProps(nextProps) {
    // 路由参数改变时，重新请求数据渲染
    let categoryId = nextProps.location.state.categoryId
    this.getCategoryList(categoryId)
  }

  getCategoryList(categoryId) {
    fetch('/api/classify/getProductData', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8;'
      },
      body: qs.stringify({
        categoryID: categoryId
      })
    })
      .then(response => response.json())
      .then(result => this.setState({categoryList: result.data.productList}))
  }

  render() {
    return (
      <div style={{height: '100%'}} ref={el => this.categoryScrollEl = el}>
        <Category>
          {
            this.state.categoryList.map(list => (
              <CategoryList key={list.categoryName}>
                <p className="cateName">{list.categoryName}</p>
                <ul className="productList">
                  {
                    list.item.map(item => (
                      <li className="item" key={item.productId}>
                        <div className="item-img">
                          <img src={item.imageUrl} alt=""/>
                        </div>
                        <div className="item-des">
                          <p className="item-price">
                            <i>￥</i>
                            <span className="item-price-int">{item.price}</span>
                          </p>
                          <p className="item-labels">
                            {
                              item.labels.map(label => (
                                <span key={label.content} style={{background: `${label.color}`, color: `${label.textColor}`, borderColor: `${label.roundColor}`}}>{label.content}</span>
                              ))
                            }
                          </p>
                          <p className="item-bck">{item.subtitle}</p>
                          <p className="item-title">{item.title}</p>
                          <p className="item-praise">{item.evaluate}条好评</p>
                        </div>
                      </li>
                    ))
                  }
                </ul>
              </CategoryList>
            ))
          }
        </Category>
        {/* <Top isShow={!this.state.isShow} scroll={this.categoryScroll}></Top> */}
      </div>
    );
  }
}

export default withRouter(HomeCategory)