import React, { Component } from 'react'
import { Carousel, WingBlank } from 'antd-mobile'

import { Slider } from './styledComponent'

class SliderContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: ['1', '2', '3'],
    }
  }

  componentDidMount() {
    // simulate img loading
    setTimeout(() => {
      this.setState({
        data: ['AiyWuByWklrrUDlFignR', 'TekJlZRVCjLFexlOCuWn', 'IJOtIlfsYdTyaDTRVrLI'],
      });
    }, 100);
  }

  render() {
    return (
      <Slider>
        <WingBlank>
          <Carousel
            autoplay={false}
            infinite={false}
            dots={false}
            beforeChange={(from, to) => console.log(`slide from ${from} to ${to}`)}
            afterChange={index => console.log('slide to', index)}
          >
            {this.state.data.map(val => (
              <a
                key={val}
                style={{ display: 'inline-block', width: '100%' }}
              >
                <img
                  src={`https://zos.alipayobjects.com/rmsportal/${val}.png`}
                  alt=""
                  style={{ width: '100%', verticalAlign: 'top', height: '7.5rem' }}
                  onLoad={() => {
                    window.dispatchEvent(new Event('resize'));
                  }}
                />
              </a>
            ))}
          </Carousel>
        </WingBlank>
      </Slider>
    )
  }
}

export default SliderContainer