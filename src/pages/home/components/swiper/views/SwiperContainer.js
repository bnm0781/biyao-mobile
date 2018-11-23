import React, { Component } from 'react';
import { Carousel, WingBlank } from 'antd-mobile';

import { Swiper } from './styledComponent'

class SwiperContainer extends Component {
  state = {
    data: ['1', '2', '3', '4', '5', '6'],
    imgHeight: '2.6rem',
  }

  componentDidMount() {
    this.setState({
      data: [
        'https://bfs.biyao.com/group1/M00/70/B2/rBACW1v1JT2AU4KxAAC5sX2fhEg369.jpg',
        'https://bfs.biyao.com/group1/M00/6E/F4/rBACVFv1JVuAMnlRAACYp-q-T2Q201.jpg',
        'https://bfs.biyao.com/group1/M00/70/B2/rBACW1v1JYeAPyUmAACAePPxJx4474.jpg',
        'https://bfs.biyao.com/group1/M00/70/B2/rBACW1v1JaeAITl8AACuP5MH0Cg174.jpg',
        'https://bfs.biyao.com/group1/M00/70/B2/rBACW1v1Jb-AIzWYAACWgjQ5qyU181.jpg',
        'https://bfs.biyao.com/group1/M00/70/A8/rBACYVv1Jd6AMLQoAACZgPmIwsg613.jpg'
      ],
    });
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
                key={val}
                style={{ display: 'inline-block', width: '100%', height: this.state.imgHeight }}
              >
                <img
                  src={`${val}`}
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

export default SwiperContainer;