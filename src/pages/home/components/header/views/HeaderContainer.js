import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'

import { Header } from './styledcomponent'

import { NavContainer as Nav } from 'common/nav'             // 导航栏组件
import { SearchContainer as Search } from 'common/search'    // 搜索组件
import { NavSecondCateContainer as NavSecondCate } from 'common/navSecondCate'

class HeaderContainer extends Component {
  shouldComponentUpdate(nextProps) {
    if (!!nextProps) {
      return false
    } else {
      return true
    }
  }

  render() {
    return (
      <Header>
        <Search></Search>
        <Nav></Nav>
        {
          // 通过路径判断是否渲染 NavSecondCate 组件
          this.props.location.pathname === '/category' ? <NavSecondCate /> : null
        }
      </Header>
    );
  }
}

export default withRouter(HeaderContainer);