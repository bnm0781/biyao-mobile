import React, { Component } from 'react';

import { ThreeModule } from './styledComponent'

class ThreeModuleContainer extends Component {
  render() {
    return (
        <ThreeModule>
        {
          this.props.threeModule.map(item => (
              <div className="triplegap-item" key={item.id}>
                <span>
                  <div className="module-titles">
                    <div className="triplegap-title">{item.title}</div>
                    <div className="triplegap-sub-title">{item.subTitle}</div>
                  </div>
                  <div className="triplegap-img">
                    <img src={item.imgSrc} alt=""/>
                  </div>
                </span>
              </div>
          ))
        }
        </ThreeModule>
    );
  }
}

export default ThreeModuleContainer;