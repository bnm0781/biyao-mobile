import React from 'react'

import { Header } from './styledcomponent'

import { NavContainer as Nav } from 'common/nav'
import { SearchContainer as Search } from 'common/search'

export default (props) => {
  return (
    <Header>
      <Search></Search>
      <Nav></Nav>
    </Header>
  )
}