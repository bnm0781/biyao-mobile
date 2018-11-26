import React, { Component, Fragment } from 'react';

import { FourModule } from './styledComponent'

class FourModuleContainer extends Component {
  render() {
    return (
      <Fragment>
        {
          this.props.fourModule.map((item, value) => (
            <FourModule key={value}>
            {
              item.map(dItem => (
                <div className="doubledup-item" key={dItem.id}>
                  <div className="module-titles">
                    <div className="doubledup-title">{dItem.title}</div>
                    <p className="doubledup-sub-title">{dItem.subTitle}</p>
                  </div>
                  <div className="doubledup-img">
                    <img src={dItem.imgSrc1} alt=""/>
                    <img src={dItem.imgSrc2} alt=""/>
                  </div>
                </div>
              ))
            }
              <p className="bd-bottom"></p>
            </FourModule>
          ))
        }
      </Fragment>
    );
  }
}

export default FourModuleContainer;