import React, { Component } from 'react'

import { Commodity } from './styledComponent'
import {SliderContainer as Slider} from '../components/slider'

class CommodityContainer extends Component {
  render() {
    return (
      <Commodity>
        <Slider></Slider>
      </Commodity>
    )
  }
}

export default CommodityContainer