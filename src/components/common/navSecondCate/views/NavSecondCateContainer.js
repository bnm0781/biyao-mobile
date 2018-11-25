import React, { Component } from 'react';

import { NavSecondCate } from './styledComponent'

class NavSecondCateContainer extends Component {
  render() {
    return (
      <NavSecondCate>
        <div>
          <ul>
            <li>
              <i>咖啡</i>
            </li>
          </ul>
          <span className="nav-secondCate-line">|</span>
        </div>
        <div className="together">
          <span className="img"></span>
          <span className="title">一起拼</span>
        </div>
      </NavSecondCate>
    );
  }
}

export default NavSecondCateContainer;