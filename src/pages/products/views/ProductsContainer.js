import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'

import { Products } from './styledComponent'
import { TabsContainer as Tabs } from '../components/tabs'
import { FooterContainer as Footer } from '../components/footer'
import { CommodityContainer as Commodity } from '../components/commodity'

class ProductsContainer extends Component {
  render() {
    return (
      <Products>
        <Tabs></Tabs>
        <div style={{height: '100%'}} ref={el => this.scrollEl = el}>
          <div style={{paddingBottom: '.96rem'}}>
            <Commodity></Commodity>
          </div>
        </div>
        <Footer></Footer>
      </Products>
    )
  }
}

export default withRouter(connect(null, null)(ProductsContainer))