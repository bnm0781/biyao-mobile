import React, { Component } from 'react';

import { Floor } from './styledComponent'
import { ThreeModuleContainer as ThreeModule } from '../../threeModule'
import { TwoModuleContainer as TwoModule } from '../../twoModule'

class FloorContainer extends Component {
  render() {
    return (
      <Floor>
        <div className="module-titleline">
          <span>
            <h3 className="floorTitle">{this.props.floor.floorTitle}<i></i></h3>
            <p className="floorSubTitle">{this.props.floor.floorSubTitle}</p>
          </span>
        </div>
        <TwoModule twoModule={this.props.floor.floorTwo}></TwoModule>
        <ThreeModule threeModule={this.props.floor.floorThree}></ThreeModule>
      </Floor>
    );
  }
}

export default FloorContainer;