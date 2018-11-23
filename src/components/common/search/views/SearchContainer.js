import React, { Component } from 'react';

import { Search, SearchIcon, SearchDefaultValue } from './styledComponent'

import searchIcon from 'icon/search.png'

class SearchContainer extends Component {
  render() {
    return (
      <Search>
        <SearchIcon>
          <img src={searchIcon} alt=""/>
        </SearchIcon>
        <SearchDefaultValue>请输入您想要的商品</SearchDefaultValue>
      </Search>
    );
  }
}

export default SearchContainer;