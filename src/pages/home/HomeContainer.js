import React, { Component } from 'react'
import { TabBar } from 'antd-mobile'
import './style.css'

class HomeContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      selectedTab: 'redTab',
      fullScreen: true,
    }
  }

  render() {
    return (
      <div style={this.state.fullScreen ? { position: 'fixed', height: '100%', width: '100%', top: 0 } : { height: 400 }}>
        <TabBar
          unselectedTintColor="#949494"
          tintColor="#33A3F4"
          barTintColor="white"
        >
          <TabBar.Item
            title="Life"
            key="Life"
            icon={<div style={{
              width: '.45rem',
              height: '.45rem',
              background: 'url(https://zos.alipayobjects.com/rmsportal/sifuoDUQdAFKAVcFGROC.svg) center center /  .45rem .45rem no-repeat' }}
            />
            }
            selectedIcon={<div style={{
              width: '.45rem',
              height: '.45rem',
              background: 'url(https://zos.alipayobjects.com/rmsportal/iSrlOTqrKddqbOmlvUfq.svg) center center /  .45rem .45rem no-repeat' }}
            />
            }
            selected={this.state.selectedTab === 'blueTab'}
            onPress={() => {
              this.setState({
                selectedTab: 'blueTab',
              });
            }}
            data-seed="logId"
          >
            <div>1</div>
          </TabBar.Item>
          <TabBar.Item
            icon={
              <div style={{
                width: '.45rem',
                height: '.45rem',
                background: 'url(https://gw.alipayobjects.com/zos/rmsportal/BTSsmHkPsQSPTktcXyTV.svg) center center /  .45rem .45rem no-repeat' }}
              />
            }
            selectedIcon={
              <div style={{
                width: '.45rem',
                height: '.45rem',
                background: 'url(https://gw.alipayobjects.com/zos/rmsportal/ekLecvKBnRazVLXbWOnE.svg) center center /  .45rem .45rem no-repeat' }}
              />
            }
            title="Koubei"
            key="Koubei"
            selected={this.state.selectedTab === 'redTab'}
            onPress={() => {
              this.setState({
                selectedTab: 'redTab',
              });
            }}
            data-seed="logId1"
          >
            <div>2</div>
          </TabBar.Item>
          <TabBar.Item
            icon={
              <div style={{
                width: '.45rem',
                height: '.45rem',
                background: 'url(https://zos.alipayobjects.com/rmsportal/psUFoAMjkCcjqtUCNPxB.svg) center center /  .45rem .45rem no-repeat' }}
              />
            }
            selectedIcon={
              <div style={{
                width: '.45rem',
                height: '.45rem',
                background: 'url(https://zos.alipayobjects.com/rmsportal/IIRLrXXrFAhXVdhMWgUI.svg) center center /  .45rem .45rem no-repeat' }}
              />
            }
            title="Friend"
            key="Friend"
            selected={this.state.selectedTab === 'greenTab'}
            onPress={() => {
              this.setState({
                selectedTab: 'greenTab',
              });
            }}
          >
            <div>3</div>
          </TabBar.Item>
          <TabBar.Item
            icon={{ uri: 'https://zos.alipayobjects.com/rmsportal/asJMfBrNqpMMlVpeInPQ.svg' }}
            selectedIcon={{ uri: 'https://zos.alipayobjects.com/rmsportal/gjpzzcrPMkhfEqgbYvmN.svg' }}
            title="My"
            key="my"
            selected={this.state.selectedTab === 'yellowTab'}
            onPress={() => {
              this.setState({
                selectedTab: 'yellowTab',
              });
            }}
          >
            <div>4</div>
          </TabBar.Item>
        </TabBar>
      </div>
    )
  }
}

export default HomeContainer