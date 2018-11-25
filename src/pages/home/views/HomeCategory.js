import React, { Component } from 'react';

import { Category, CategoryItem } from './styledComponent'

class HomeCategory extends Component {
  render() {
    return (
      <Category>
        <CategoryItem>
          <p className="cateName">咖啡粉</p>
          <ul className="productList">
            <li className="item">
              <div className="item-img">
                <img src="https://bfs.biyao.com/group1/M00/51/BA/rBACW1uFacCAShDcAAA5qDQqJDo607.jpg" alt=""/>
              </div>
              <div className="item-des">
                <p className="item-price">
                  <i>￥</i>
                  <span className="item-price-int">39</span>
                </p>
                <p className="item-labels">
                  <span style={{background: '#AB7FD1', color: '#FFFFFF', borderColor: '#AB7FD1'}}>精选</span>
                  <span style={{color: '#FB4C81', borderColor: '#FB4C81'}}>一起拼</span>
                </p>
                <p className="item-bck">星巴克合作基地制造商直供</p>
                <p className="item-title">ANNY法式深焙袋冲咖啡2袋</p>
                <p className="item-praise">470条好评</p>
              </div>
            </li>
          </ul>
        </CategoryItem>
      </Category>
    );
  }
}

export default HomeCategory;