import React, { Component } from 'react'

import { Supplier } from './styledComponent'

class SupplierContainer extends Component {
  render() {
    return (
      <Supplier>
        <div className="supplier-top-wrap">
          <div className="supplier-img-title">
            <img className="supplier-img lazyload-img" src="https://bfs.biyao.com/group1/M00/1B/53/rBACVFnDeWKATlbPAABTbrrX9_w243.jpg" alt="" />
            <div className="supplier-title">必漫日化家居</div>
          </div>
          <div className="supplier-onsale">
            <div className="supplier-onsale-num">38</div>
            <div className="supplier-onsale-text">在售商品</div>
          </div>
        </div>
        <div className="sipplier-img-wrap">
					<ul className="commend-list">
            <li data-href="/products/1301825044000100001.html" className="aLinkJump">
              <span className="commend-list-a">
                <div className="recommend-pic">
                  <img src="https://bfs.biyao.com/group1/M00/6F/58/rBACYVvyL2aAKVJ8AACO11fIp2g609.jpg" />
                </div>
                <p className="recommend-tit inaline commend-list-tit">多功能折叠水壶</p>
                <p className="item-labels"><span style={{background: '', color: '#FB4C81', borderColor: '#FB4C81'}}>一起拼</span></p>
                <p className="item-price"><i>￥</i><span className="item-only-int">158</span></p>
              </span>
            </li>
            <li data-href="/products/1301825044000100001.html" className="aLinkJump">
              <span className="commend-list-a">
                <div className="recommend-pic">
                  <img src="https://bfs.biyao.com/group1/M00/6F/58/rBACYVvyL2aAKVJ8AACO11fIp2g609.jpg" />
                </div>
                <p className="recommend-tit inaline commend-list-tit">多功能折叠水壶</p>
                <p className="item-price"><i>￥</i><span className="item-only-int">158</span></p>
              </span>
            </li>
            <li data-href="/products/1301825044000100001.html" className="aLinkJump">
              <span className="commend-list-a">
                <div className="recommend-pic">
                  <img src="https://bfs.biyao.com/group1/M00/6F/58/rBACYVvyL2aAKVJ8AACO11fIp2g609.jpg" />
                </div>
                <p className="recommend-tit inaline commend-list-tit">多功能折叠水壶</p>
                <p className="item-price"><i>￥</i><span className="item-only-int">158</span></p>
              </span>
            </li>
            <li data-href="/products/1301825044000100001.html" className="aLinkJump">
              <span className="commend-list-a">
                <div className="recommend-pic">
                  <img src="https://bfs.biyao.com/group1/M00/6F/58/rBACYVvyL2aAKVJ8AACO11fIp2g609.jpg" />
                </div>
                <p className="recommend-tit inaline commend-list-tit">多功能折叠水壶</p>
                <p className="item-price"><i>￥</i><span className="item-only-int">158</span></p>
              </span>
            </li>
            <li data-href="/products/1301825044000100001.html" className="aLinkJump">
              <span className="commend-list-a">
                <div className="recommend-pic">
                  <img src="https://bfs.biyao.com/group1/M00/6F/58/rBACYVvyL2aAKVJ8AACO11fIp2g609.jpg" />
                </div>
                <p className="recommend-tit inaline commend-list-tit">多功能折叠水壶</p>
                <p className="item-price"><i>￥</i><span className="item-only-int">158</span></p>
              </span>
            </li>
          </ul>
				</div>
      </Supplier>
    )
  }
}

export default SupplierContainer