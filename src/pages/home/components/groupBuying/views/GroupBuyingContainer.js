import React, { Component } from 'react';
import { Carousel, WingBlank } from 'antd-mobile';

import { GroupBuying } from './styledComponent'

class GroupBuyingContainer extends Component {
  render() {
    return (
      <GroupBuying>
        <WingBlank>
          <Carousel className="my-carousel"
            vertical
            dots={false}
            dragging={false}
            swiping={false}
            autoplay
            infinite
          >
            <div className="v-item">
              <img src="https://bfs.biyao.com/group1/M00/68/47/rBACVFvhmquABNSRAAANTm_cPSU518.png" alt=""/>
              <span className='nickname'>
                <span>独具慧眼的乔纳8400</span>
              </span>
              <span className='title'>发起了一起拼</span>
            </div>
            <div className="v-item">
              <img src="https://bfs.biyao.com/group1/M00/68/47/rBACVFvhmquABNSRAAANTm_cPSU518.png" alt=""/>
              <span className='nickname'>
                <span>独具慧眼的乔纳8400</span>
              </span>
              <span className='title'>发起了一起拼</span>
            </div>
          </Carousel>
          <p className='goGroupBuying'>
            <span>去开团<img src="https://static.biyao.com/m/img/master/base/more_white24@2x.png?v=biyao_79883a4" alt=""/></span>
          </p>
        </WingBlank>
      </GroupBuying>
    );
  }
}

export default GroupBuyingContainer;