import React, { Component, Fragment } from 'react'
import { Route } from 'react-router-dom'

import { OriginContainer as Origin } from 'pages/origin'    // 视图窗口
import { SwiperDetailsContainer as SwiperDetails } from 'pages/swiperDetails'    // 视图窗口

class App extends Component {
  render() {
    return (
      <Fragment>
          <Route exact path="/" component={Origin}></Route>
          <Route exact path="/swiper" component={SwiperDetails}></Route>
      </Fragment>
    )
  }
}

export default App
