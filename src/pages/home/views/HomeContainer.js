import React, { Component, Fragment } from 'react'
import { Route } from 'react-router-dom'

import { HeaderContainer as Header} from '../components/header'                    // 首页头部组件
import HomeRecommend from './HomeRecommend'                                        // 推荐组件
import HomeCategory from './HomeCategory'                                          // 分类显示组件

class HomeContainer extends Component {
  render() {
    return (
      <Fragment>
        <Header></Header>
        <div style={{height: '100%'}}>
          <Route path='/' render={() => <HomeRecommend />}></Route>
          <Route exact path='/category' component={HomeCategory}></Route>
        </div>
      </Fragment>
    )
  }
}

export default HomeContainer