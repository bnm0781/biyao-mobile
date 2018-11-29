import React, { Component } from 'react';
import { Carousel, WingBlank } from 'antd-mobile';
import { withRouter } from 'react-router-dom'

import { Swiper } from './styledComponent'

class SwiperContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // swiper 渲染的图片
      data: [
        {
          imgSrc: 'https://bfs.biyao.com/group1/M00/71/3D/rBACVFv7xEiAEclvAACZhZVP3lo343.jpg',
          supplierID: 130146
        },
        {
          imgSrc: 'https://bfs.biyao.com/group1/M00/74/84/rBACYVv-WfeAQO8WAADb1E5Kzhk670.jpg',
          supplierID: 130022
        },
        {
          imgSrc: 'https://bfs.biyao.com/group1/M00/72/FC/rBACW1v7xMGAVQsuAADEhUxYa8c978.jpg',
          supplierID: 130108
        },
        {
          imgSrc: 'https://bfs.biyao.com/group1/M00/72/F2/rBACYVv7xNqAAilJAABY0bN-MZU686.jpg',
          supplierID: 130036
        },
        {
          imgSrc: 'https://bfs.biyao.com/group1/M00/72/F2/rBACYVv7xPaATLxFAACaJAUj3Ys239.jpg',
          supplierID: 130119
        },
        {
          imgSrc: 'https://bfs.biyao.com/group1/M00/71/3D/rBACVFv7xQyACfahAAEKMHLdq08176.jpg',
          supplierID: 130237
        }
      ],
      imgHeight: '2.6rem'
    }

    this.goSwiperUrl = this.goSwiperUrl.bind(this)
  }

  shouldComponentUpdate(nextProps) {
    if (!!nextProps) {
      return false
    } else {
      return true
    }
  }

  goSwiperUrl(supplierID) {
    this.props.history.push({pathname: '/swiper', state: {supplierID}})
  }

  render() {
    return (
      <Swiper>
        <WingBlank>
          <Carousel
            autoplay={true}
            infinite={true}
            slideWidth={1}
            dotStyle={{
              display: 'inline-block',
              width: '.16rem',
              height: '.16rem',
              marginLeft: '.15rem',
              border: '.02rem solid #7f4395',
              borderRadius: '50%',
              background: 'transparent' }}
            dotActiveStyle={{
              display: 'inline-block',
              width: '.16rem',
              height: '.16rem',
              marginLeft: '.15rem',
              border: '.02rem solid #f7b200',
              borderRadius: '50%',
              background: '#f7b200' }}
          >
            {this.state.data.map(val => (
              <span
                key={val.supplierID}
                style={{ display: 'inline-block', width: '100%', height: this.state.imgHeight }}
                onClick={() => this.goSwiperUrl(val.supplierID)}
              >
                <img
                  src={`${val.imgSrc}`}
                  alt=""
                  style={{ width: '100%', verticalAlign: 'top' }}
                  onLoad={() => {
                    window.dispatchEvent(new Event('resize'));
                    this.setState({ imgHeight: 'auto' });
                  }}
                />
              </span>
            ))}
          </Carousel>
        </WingBlank>
      </Swiper>
    );
  }
}

export default withRouter(SwiperContainer);