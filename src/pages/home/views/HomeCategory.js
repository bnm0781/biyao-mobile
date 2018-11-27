import React, { Component } from 'react';
import BScroll from 'better-scroll'
import { withRouter } from 'react-router-dom'
import qs from 'qs'

import { Category, CategoryList } from './styledComponent'

class HomeCategory extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categoryList: []    // 分类列表需要渲染的数据
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
      scrollX: true
    })
  }

  componentWillReceiveProps(nextProps) {
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
      </div>
    );
  }
}

export default withRouter(HomeCategory)