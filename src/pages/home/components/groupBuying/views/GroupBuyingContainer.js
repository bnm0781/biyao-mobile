import React, { Component } from 'react';
import { Carousel, WingBlank } from 'antd-mobile';
import qs from 'qs'
import { List } from 'immutable'

import { GroupBuying } from './styledComponent'

class GroupBuyingContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      groupList: []    // 团购推送数据列表
    }
  }

  componentDidMount() {
    fetch('/api/getHomeGroupInfo', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8;'
      },
      body: qs.stringify({
        limit: 10,
        filterHour: 1
      })
    })
      .then(response => response.json())
      .then(result => {
        this.setState({
          groupList: result.data.groupList
        })
      })
  }

  render() {
    // 因为请求数据前 groupList 为空数组，Carousel 不能滚动
    // 需要利用 immutable 判断 groupList 是否为空数组
    // 当请求完毕数据后再渲染组件
    if (List(this.state.groupList).size !== 0) {
      return (
        <GroupBuying {...this.props}>
          <WingBlank>
            <Carousel className="my-carousel"
              vertical
              dots={false}
              dragging={false}
              swiping={false}
              autoplay={true}
              infinite={true}
            >
              {
                this.state.groupList.map(item => (
                  <div className="v-item" key={item.groupId}>
                    <img src={item.avatarUrl} alt=""/>
                    <span className='nickname'>
                      <span>{item.nickname}</span>
                    </span>
                    <span className='title'>发起了一起拼</span>
                  </div>
                ))
              }
            </Carousel>
            <p className='goGroupBuying'>
              <span>去开团<img src="https://static.biyao.com/m/img/master/base/more_white24@2x.png?v=biyao_79883a4" alt=""/></span>
            </p>
          </WingBlank>
        </GroupBuying>
      );
    } else {
      return null
    }
  }
}

export default GroupBuyingContainer;