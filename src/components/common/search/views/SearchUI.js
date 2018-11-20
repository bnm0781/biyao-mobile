import React from 'react'

import { Search, SearchIcon, SearchDefaultValue } from './styledComponent'

import searchIcon from 'icon/search.png'

export default (props) => {
  return (
    <Search>
      <SearchIcon>
        <img src={searchIcon} alt=""/>
      </SearchIcon>
      <SearchDefaultValue>请输入您想要的商品</SearchDefaultValue>
    </Search>
  )
}