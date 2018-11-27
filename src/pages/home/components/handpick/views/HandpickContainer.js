import React, { Component } from 'react'

import { Handpick } from './styledComponent'

class HandpickContainer extends Component {
  render() {
    return (
      <Handpick>
        <div className="module-titleline">
          <em>
            <h3>精选专题<i></i></h3>
            <span className="right-arrow"><i></i></span>
          </em>
        </div>
        <div className="module-special">
          <div className="special-item">
            <div className="special-img">
              <img src="https://bfs.biyao.com/group1/M00/72/FB/rBACYVv70DSAfPzRAACaalUR8U0816.jpg" alt=""/>
            </div>
            <div className="module-titles">
              <div className="special-title">再不保养就老啦</div>
              <i>￥69元起</i>
            </div>
          </div>
        </div>
      </Handpick>
    )
  }
}

export default HandpickContainer