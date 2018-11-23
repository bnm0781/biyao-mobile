import React, { Component } from 'react';

import { Title } from './styledComponent'

class TitleContainer extends Component {
  render() {
    return (
      <Title {...this.props}>
        <span>
          <h3>
            {this.props.titleName}
            <i></i>
          </h3>
        </span>
      </Title>
    );
  }
}

export default TitleContainer;