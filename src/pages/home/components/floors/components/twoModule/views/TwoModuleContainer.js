import React, { Component } from 'react';

import { TwoModule } from './styledComponent'

class TwoModuleContainer extends Component {
  render() {
    return (
      <TwoModule>
        {
          this.props.twoModule.map(item => (
            <div className="doubleunfill-item" key={item.id}>
              <div className="module-titles">
                <div className="doubleunfill-title">{item.title}</div>
                <p className="doubleunfill-sub-title">{item.subTitle}</p>
              </div>
              <div className="doubleunfill-img">
                <img src={item.imgSrc} alt=""/>
              </div>
            </div>
          ))
        }
      </TwoModule>
    );
  }
}

export default TwoModuleContainer;