import React, { Component } from 'react';
import { Map } from 'immutable'

import { DailyNew, Manufacturers, FourModule, TwoModule, Peach, Ranking } from './styledComponent'
import { TitleContainer as Title } from 'common/title'

class FloorsContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      floors: {}
    }

  }

  componentDidMount() {
    fetch('/mock/floors.json')
      .then(response => response.json())
      .then(result => this.setState({floors: result}))
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (Map(nextState.floors).equals(Map(this.state.floors))) {
      return false
    } else {
      return true
    }
  }

  render() {
    if (Map(this.state.floors).size !== 0) {
      // console.log(this.state.floors.manufacturers);
      return (
        <div className="floors">
          <DailyNew>
            <div className="module-singleline">
              <div className="singleline-item">
                <div className="singleline-img">
                  <img src="https://bfs.biyao.com/group1/M00/71/25/rBACYVv2c7iAICJPAAD1AS887As148.jpg" alt=""/>
                </div>
              </div>
            </div>
          </DailyNew>
          <Manufacturers>
            <Title titleName="大牌制造商" titleColor="#4a4a4a" borderColor="#4a4a4a"></Title>
            {
              this.state.floors.manufacturers.informationOne.map((item, value) => (
                <FourModule key={value}>
                {
                  item.map(dItem => (
                    <div className="doubledup-item" key={dItem.id}>
                      <div className="module-titles">
                        <div className="doubledup-title">{dItem.title}</div>
                        <p className="doubledup-sub-title">{dItem.subTitle}</p>
                      </div>
                      <div className="doubledup-img">
                        <img src={dItem.imgSrc1} alt=""/>
                        <img src={dItem.imgSrc2} alt=""/>
                      </div>
                    </div>
                  ))
                }
                  <p className="bd-bottom"></p>
                </FourModule>
              ))
            }
            <TwoModule>
              {
                this.state.floors.manufacturers.informationTwo.map(item => (
                  <div className="doubleunfill-item" key={item.id}>
                    <div className="module-titles">
                      <div className="doubleunfill-title">{item.title}</div>
                      <p className="doubleunfill-sub-title">{item.subTitle}</p>
                    </div>
                    <div className="doubleunfill-img">
                      <img src={item.imgSrc} alt=""/>
                    </div>
                  </div>
                ))
              }
            </TwoModule>
            {
              this.state.floors.manufacturers.informationThree.map((item, value) => (
                <FourModule key={value}>
                {
                  item.map(dItem => (
                    <div className="doubledup-item" key={dItem.id}>
                      <div className="module-titles">
                        <div className="doubledup-title">{dItem.title}</div>
                        <p className="doubledup-sub-title">{dItem.subTitle}</p>
                      </div>
                      <div className="doubledup-img">
                        <img src={dItem.imgSrc1} alt=""/>
                        <img src={dItem.imgSrc2} alt=""/>
                      </div>
                    </div>
                  ))
                }
                  <p className="bd-bottom"></p>
                </FourModule>
              ))
            }
            <TwoModule>
              {
                this.state.floors.manufacturers.informationFour.map(item => (
                  <div className="doubleunfill-item" key={item.id}>
                    <div className="module-titles">
                      <div className="doubleunfill-title">{item.title}</div>
                      <p className="doubleunfill-sub-title">{item.subTitle}</p>
                    </div>
                    <div className="doubleunfill-img">
                      <img src={item.imgSrc} alt=""/>
                    </div>
                  </div>
                ))
              }
            </TwoModule>
            {
              this.state.floors.manufacturers.informationFive.map((item, value) => (
                <FourModule key={value}>
                {
                  item.map(dItem => (
                    <div className="doubledup-item" key={dItem.id}>
                      <div className="module-titles">
                        <div className="doubledup-title">{dItem.title}</div>
                        <p className="doubledup-sub-title">{dItem.subTitle}</p>
                      </div>
                      <div className="doubledup-img">
                        <img src={dItem.imgSrc1} alt=""/>
                        <img src={dItem.imgSrc2} alt=""/>
                      </div>
                    </div>
                  ))
                }
                  <p className="bd-bottom"></p>
                </FourModule>
              ))
            }
          </Manufacturers>
          <Peach>
            <Title titleName="桃花坞" titleColor="#7F4395" borderColor="#7F4395"></Title>
            <div className="module-singleline">
              <div className="singleline-item">
                <div className="module-titles">
                  <div className="singleline-title">既见君子，云胡不喜</div>
                  <p className="singleline-sub-title">蒹葭苍苍，白露为霜。所谓伊人，在水一方</p>
                </div>
                <div className="singleline-img">
                  <img src="https://bfs.biyao.com/group1/M00/67/E6/rBACW1vZcsuAYPgMAAGsDszvH4o612.jpg" alt=""/>
                </div>
              </div>
            </div>
          </Peach>
          <Ranking>
            <Title titleName="排行榜" titleColor="#7F4395" borderColor="#7F4395"></Title>
            <div className="module-blockline"></div>
            <div className="module-doubleleft">
              <div className="doubleleft-item">
                <div className="module-titles">
                  <div className="doubleleft-title">热销·榜</div>
                  <p className="doubleleft-sub-title">品质好货 一触即达</p>
                </div>
                <div className="doubleleft-img">
                  <img src="https://bfs.biyao.com/group1/M00/2A/72/rBACYVphqLaAbtsEAABr5lI6Q2E098.jpg" alt=""/>
                  <img src="https://bfs.biyao.com/group1/M00/18/58/rBACVFmRPw2AKvZ3AABR8tzTnO8495.jpg" alt=""/>
                </div>
              </div>
              <div className="doubleleft-item">
                <div className="module-titles">
                  <div className="doubleleft-title" style={{color: '#CC7A96'}}>热搜·榜</div>
                  <p className="doubleleft-sub-title">都在寻觅的好物</p>
                </div>
                <div className="doubleleft-img">
                  <img src="https://bfs.biyao.com/group1/M00/6A/EE/rBACYVvlCrOAJsLDAAAW85k8LpA136.jpg" alt=""/>
                </div>
              </div>
              <p className="bd-bottom"></p>
            </div>
            <div className="module-triple">
              <div className="triple-item">
                <div className="module-titles">
                  <div className="triple-title" style={{color:'#A37ACC'}}>好评·榜</div>
                  <p className="triple-sub-title">口碑单品 为你精选</p>
                </div>
                <div className="triple-img">
                  <img src="https://bfs.biyao.com/group1/M00/3A/1B/rBACYVsFAXKAM8kzAABtNwzQvbE641.jpg" alt=""/>
                </div>
              </div>
              <div className="triple-item">
                <div className="module-titles">
                  <div className="triple-title" style={{color:'#A37ACC'}}>好评·榜</div>
                  <p className="triple-sub-title">口碑单品 为你精选</p>
                </div>
                <div className="triple-img">
                  <img src="https://bfs.biyao.com/group1/M00/3A/1B/rBACYVsFAXKAM8kzAABtNwzQvbE641.jpg" alt=""/>
                </div>
              </div>
              <div className="triple-item">
                <div className="module-titles">
                  <div className="triple-title" style={{color:'#A37ACC'}}>好评·榜</div>
                  <p className="triple-sub-title">口碑单品 为你精选</p>
                </div>
                <div className="triple-img">
                  <img src="https://bfs.biyao.com/group1/M00/3A/1B/rBACYVsFAXKAM8kzAABtNwzQvbE641.jpg" alt=""/>
                </div>
              </div>
            </div>
          </Ranking>
        </div>
      );
    } else {
      return null
    }
  }
}

export default FloorsContainer;