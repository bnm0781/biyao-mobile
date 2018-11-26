import React, { Component } from 'react';
import BScroll from 'better-scroll'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'

import { Nav, NavFirstCate, CategoryList, CategoryListLi } from './styledComponent'

import { categoryListDataAsync } from '../actionCreator'

const mapDispatch = (dispatch) => {
  return {
    getCategoryList(categoryId) {
      dispatch(categoryListDataAsync(dispatch, categoryId))
    }
  }
}

class NavContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      // 导航页签列表：页签标题，跳转页面时需要传递的 ID 参数
      categoryList: [
        {category: '推荐'},
        {category: '咖啡', categoryId: 622},
        {category: '饮食', categoryId: 628},
        {category: '男装', categoryId: 295},
        {category: '女装', categoryId: 300},
        {category: '眼镜', categoryId: 668},
        {category: '内衣配饰', categoryId: 340},
        {category: '母婴', categoryId: 394},
        {category: '鞋靴', categoryId: 38},
        {category: '运动', categoryId: 40},
        {category: '箱包', categoryId: 506},
        {category: '美妆个护', categoryId: 120},
        {category: '家纺', categoryId: 356},
        {category: '餐厨', categoryId: 187},
        {category: '电器', categoryId: 534},
        {category: '家装', categoryId: 371},
        {category: '家具', categoryId: 14},
        {category: '数码', categoryId: 472},
        {category: '汽配', categoryId: 430},
        {category: '医疗器械', categoryId: 547},
        {category: '定制', categoryId: 578}
      ],
      activeIndex: 0    // 当前需要高亮的页签项数
    }

    this.navLiClick = this.navLiClick.bind(this)
  }

  componentDidMount() {
    // nav 滚动效果
    this.navListScroll = new BScroll(this.navListScrollEl, {
      click: true,
      scrollX: true
    })
  }

  // 页签点击事件
  navLiClick(event, index, item) {
    // 点击当前页签使其高亮
    this.setState({activeIndex: index})

    // 滚动到点击的目标元素
    this.navListScroll.scrollToElement(event.target, 100, true, true)

    // 判断路由跳转的路径
    if (!item.categoryId) {
      this.props.history.push('/')
    } else {
      // 请求当前页签需要渲染的数据
      this.props.getCategoryList(item.categoryId)
      this.props.history.push({pathname: '/category', state: {
        categoryId: item.categoryId,
        category: item.categoryId
      }})
    }
  }

  render() {
    return (
      <Nav>
        <NavFirstCate>
          <CategoryList
            ref={el => this.navListScrollEl = el}
          >
            <ul>
              {
                this.state.categoryList.map((item, index) => (
                  <CategoryListLi
                    key={index}
                    active={this.state.activeIndex === index || false}
                    onClick={(event) => this.navLiClick(event, index, item)}
                  ><i>{item.category}</i></CategoryListLi>
                ))
              }
            </ul>
          </CategoryList>
        </NavFirstCate>
        <span></span>
      </Nav>
    );
  }
}

export default withRouter(connect(null, mapDispatch)(NavContainer));