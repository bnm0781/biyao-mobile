import React, { Component } from 'react';

import { Maker } from './styledComponent'
import { TitleContainer as Title } from 'common/title'
import { FourModuleContainer as FourModule } from '../../fourModule'
import { TwoModuleContainer as TwoModule } from '../../twoModule'


class MakerContainer extends Component {
  render() {
    return (
      <Maker>
        <Title titleName="大牌制造商" titleColor="#4a4a4a" borderColor="#4a4a4a"></Title>
        <FourModule fourModule={this.props.maker.informationOne}></FourModule>
        <TwoModule twoModule={this.props.maker.informationTwo}></TwoModule>
        <FourModule fourModule={this.props.maker.informationThree}></FourModule>
        <TwoModule twoModule={this.props.maker.informationFour}></TwoModule>
        <FourModule fourModule={this.props.maker.informationFive}></FourModule>
      </Maker>
    );
  }
}

export default MakerContainer;