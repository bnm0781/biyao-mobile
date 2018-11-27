import React, { Component } from 'react';

import { Client } from './styledComponent'
import { TitleContainer as Title } from 'common/title'
import { TwoModuleContainer as TwoModule } from '../../twoModule'
import { FourModuleContainer as FourModule } from '../../fourModule'

class ClientContainer extends Component {
  render() {
    return (
      <Client>
        <Title titleName="回头客推荐" titleColor="#4a4a4a" borderColor="#4a4a4a"></Title>
        <TwoModule twoModule={this.props.client.recommendOne}></TwoModule>
        <FourModule fourModule={this.props.client.recommendTwo}></FourModule>
      </Client>
    );
  }
}

export default ClientContainer;