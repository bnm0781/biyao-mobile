import React, { Component } from 'react';

import { DailyNew } from './styledComponent'

class DailyNewContainer extends Component {
  render() {
    return (
      <DailyNew>
        <div className="module-singleline">
          <div className="singleline-item">
            <div className="singleline-img">
              <img src="https://bfs.biyao.com/group1/M00/71/25/rBACYVv2c7iAICJPAAD1AS887As148.jpg" alt=""/>
            </div>
          </div>
        </div>
      </DailyNew>
    );
  }
}

export default DailyNewContainer;