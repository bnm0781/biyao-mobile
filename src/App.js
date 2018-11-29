import React, { Component, Fragment } from 'react'
import { Route, Redirect, Switch } from 'react-router-dom'

import { OriginContainer as Origin } from 'pages/origin'                         // 视图窗口
import { SwiperDetailsContainer as SwiperDetails } from 'pages/swiperDetails'    // 轮播图窗口
import { ProductsContainer as Products } from 'pages/products'                   // 商品详情窗口

class App extends Component {
  render() {
    return (
      <Fragment>
        <Switch>
          <Redirect exact from='/' to='/home'/>
          <Route path="/home" component={Origin}></Route>
          <Route path="/swiper" component={SwiperDetails}></Route>
          <Route path="/products" component={Products}></Route>
        </Switch>
      </Fragment>
    )
  }
}

export default App
