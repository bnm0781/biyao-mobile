import React, { Component } from 'react'
import { TabBar } from 'antd-mobile'

import { HomeContainer as Home} from 'pages/home'    // 首页面

import { OriginView } from './styledComponent'

import home from 'icon/home.png'
import homeSelected from 'icon/home-selected.png'
import classify from 'icon/classify.png'
import classifySelected from 'icon/classify-selected.png'
import car from 'icon/car.png'
import carSelected from 'icon/car-selected.png'
import my from 'icon/my.png'
import mySelected from 'icon/my-selected.png'

class OriginContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      selectedTab: 'homeTab',    // TabBar 最先展示页面
      fullScreen: true,          // 是否铺满全屏幕
    }
  }

  render() {
    return (
      <OriginView>
        <div style={this.state.fullScreen ? { position: 'fixed', height: '100%', width: '100%', top: 0 } : { height: 400 }}>
          <TabBar
            unselectedTintColor="gray"
            tintColor="#7f4395"
            barTintColor="white"
          >
            <TabBar.Item
              title="首页"
              key="Home"
              icon={<div style={{
                width: '.45rem',
                height: '.45rem',
                background: `url(${home}) center center /  .45rem .45rem no-repeat` }}
              />
              }
              selectedIcon={<div style={{
                width: '.45rem',
                height: '.45rem',
                background: `url(${homeSelected}) center center /  .45rem .45rem no-repeat` }}
              />
              }
              selected={this.state.selectedTab === 'homeTab'}
              onPress={() => {
                this.setState({
                  selectedTab: 'homeTab',
                });
              }}
            >
              <Home></Home>
            </TabBar.Item>
            <TabBar.Item
              icon={
                <div style={{
                  width: '.45rem',
                  height: '.45rem',
                  background: `url(${classify}) center center /  .45rem .45rem no-repeat` }}
                />
              }
              selectedIcon={
                <div style={{
                  width: '.45rem',
                  height: '.45rem',
                  background: `url(${classifySelected}) center center /  .45rem .45rem no-repeat` }}
                />
              }
              title="分类"
              key="Classify"
              selected={this.state.selectedTab === 'classifyTab'}
              onPress={() => {
                this.setState({
                  selectedTab: 'classifyTab',
                });
              }}
            >
              <div>2</div>
            </TabBar.Item>
            <TabBar.Item
              icon={
                <div style={{
                  width: '.45rem',
                  height: '.45rem',
                  background: `url(${car}) center center /  .45rem .45rem no-repeat` }}
                />
              }
              selectedIcon={
                <div style={{
                  width: '.45rem',
                  height: '.45rem',
                  background: `url(${carSelected}) center center /  .45rem .45rem no-repeat` }}
                />
              }
              title=" 购物车"
              key="Car"
              selected={this.state.selectedTab === 'carTab'}
              onPress={() => {
                this.setState({
                  selectedTab: 'carTab',
                });
              }}
            >
              <div>3</div>
            </TabBar.Item>
            <TabBar.Item
              icon={
                <div style={{
                  width: '.45rem',
                  height: '.45rem',
                  background: `url(${my}) center center /  .45rem .45rem no-repeat` }}
                />
              }
              selectedIcon={
                <div style={{
                  width: '.45rem',
                  height: '.45rem',
                  background: `url(${mySelected}) center center /  .45rem .45rem no-repeat` }}
                />
              }
              title="我的"
              key="My"
              selected={this.state.selectedTab === 'myTab'}
              onPress={() => {
                this.setState({
                  selectedTab: 'myTab',
                });
              }}
            >
              <div>4</div>
            </TabBar.Item>
          </TabBar>
        </div>
      </OriginView>
    )
  }
}

export default OriginContainer