import React, { Component } from 'react';
import BScroll from 'better-scroll'

import { Nav, NavFirstCate, CategoryList, CategoryListLi } from './styledComponent'

class NavContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      categoryList: [
        {category: '推荐', to: '', categoryId: 623},
        {category: '咖啡', to: '', categoryId: 622},
        {category: '饮食', to: '', categoryId: 628},
        {category: '男装', to: '', categoryId: 295},
        {category: '女装', to: '', categoryId: 300},
        {category: '眼镜', to: '', categoryId: 590},
        {category: '内衣配饰', to: '', categoryId: 340},
        {category: '母婴', to: '', categoryId: 394},
        {category: '鞋靴', to: '', categoryId: 37},
        {category: '运动', to: '', categoryId: 40},
        {category: '箱包', to: '', categoryId: 506},
        {category: '美妆个护', to: '', categoryId: 120},
        {category: '家纺', to: '', categoryId: 356},
        {category: '餐厨', to: '', categoryId: 187},
        {category: '电器', to: '', categoryId: 335},
        {category: '家装', to: '', categoryId: 371},
        {category: '家具', to: '', categoryId: 14},
        {category: '数码', to: '', categoryId: 472},
        {category: '汽配', to: '', categoryId: 430},
        {category: '医疗器械', to: '', categoryId: 547},
        {category: '定制', to: '', categoryId: 578},
      ],
      activeIndex: 0
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

  shouldComponentUpdate(nextProps) {
    if (!!nextProps) {
      return false
    } else {
      return true
    }
  }

  navLiClick(event, index) {
    this.setState({activeIndex: index}, () => {
      console.log(this.state.activeIndex === index);
    })
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
                    key={item.categoryId}
                    active={this.state.activeIndex === index}
                    onClick={(event) => this.navLiClick(event, index)}
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

export default NavContainer;