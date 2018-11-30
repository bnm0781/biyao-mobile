import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import BScroll from 'better-scroll'

import { Products } from './styledComponent'
import { TabsContainer as Tabs } from '../components/tabs'
import { FooterContainer as Footer } from '../components/footer'
import { CommodityContainer as Commodity } from '../components/commodity'
import { EvaluateContainer as Evaluate } from '../components/evaluate'
import { DetailsContainer as Details } from '../components/details'

class ProductsContainer extends Component {
  componentDidMount() {
    // 添加滚动效果
    this.scroll = new BScroll(this.scrollEl, {
      click: true,
      scrollY: true,
      probeType: 1,
      pullUpLoad: {
        threshold: 50
      }
    })
  }

  render() {
    return (
      <Products>
        <Tabs></Tabs>
        <div style={{height: '100%'}} ref={el => this.scrollEl = el}>
          <div style={{paddingBottom: '.96rem'}}>
            <Commodity></Commodity>
            <Evaluate></Evaluate>
            <Details></Details>
          </div>
        </div>
        <Footer></Footer>
      </Products>
    )
  }
}

export default withRouter(connect(null, null)(ProductsContainer))