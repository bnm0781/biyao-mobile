import React, { Component } from 'react'
import { Carousel, WingBlank } from 'antd-mobile'

import { Slider } from './styledComponent'

class SliderContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imgIndex: 1,
      data: [
        'https://bfs.biyao.com/group1/M00/72/BA/rBACVFv-ObSAY07uAAGA0oBswPE802.jpg',
        'https://bfs.biyao.com/group1/M00/74/7A/rBACW1v-ObeAQbNaAAF7eJjqNRw061.jpg',
        'https://bfs.biyao.com/group1/M00/74/71/rBACYVv-ObuAGHANAACTBNJ-4XI528.jpg',
        'https://bfs.biyao.com/group1/M00/72/BA/rBACVFv-Ob2Aa-3vAACSFKQhY4A131.jpg',
        'https://bfs.biyao.com/group1/M00/74/7A/rBACW1v-OcOAMWCvAACcLdeEQCU388.jpg'
      ],
      imgHeight: '7.5rem'
    }
  }

  render() {
    return (
      <Slider>
        <WingBlank>
          <ol className="banner-item">
            <li><span>{this.state.imgIndex}</span> / 5</li>
          </ol>
          <Carousel
            autoplay={false}
            infinite={false}
            dots={false}
            afterChange={index => this.setState({imgIndex: index + 1})}
          >
            {this.state.data.map((val, index) => (
              <span
                key={index}
                style={{ display: 'inline-block', width: '100%', height: this.state.imgHeight }}
              >
                <img
                  src={`${val}`}
                  alt=""
                  style={{ width: '100%', verticalAlign: 'top', height: '7.5rem', touchAction: 'pan-y' }}
                  onLoad={() => {
                    window.dispatchEvent(new Event('resize'));
                    this.setState({ imgHeight: 'auto' });
                  }}
                />
              </span>
            ))}
          </Carousel>
        </WingBlank>
      </Slider>
    )
  }
}

export default SliderContainer