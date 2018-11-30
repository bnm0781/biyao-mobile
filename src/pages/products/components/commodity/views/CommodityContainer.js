import React, { Component } from 'react'

import { Commodity } from './styledComponent'
import { SliderContainer as Slider } from '../components/slider'
import { DetialContainer as Detial } from '../components/detial'
import { ServiceContainer as Service } from '../components/service'
import { RangeContainer as Range } from '../components/range'
import { AddressContainer as Address } from '../components/address'

class CommodityContainer extends Component {
  render() {
    return (
      <Commodity id="commodity">
        <Slider></Slider>
        <Detial></Detial>
        <Service></Service>
        <Range></Range>
        <Address></Address>
      </Commodity>
    )
  }
}

export default CommodityContainer