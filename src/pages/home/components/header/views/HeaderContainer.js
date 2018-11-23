import React, { Component } from 'react';

import { Header } from './styledcomponent'

import { NavContainer as Nav } from 'common/nav'             // 导航栏组件
import { SearchContainer as Search } from 'common/search'    // 搜索组件

class HeaderContainer extends Component {
  render() {
    return (
      <Header>
        <Search></Search>
        <Nav></Nav>
      </Header>
    );
  }
}

export default HeaderContainer;