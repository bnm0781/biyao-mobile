import React, { Component } from 'react';

import { Ranking } from './styledComponent'
import { TitleContainer as Title } from 'common/title'


class RankingContainer extends Component {
  render() {
    return (
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
              <img src="https://bfs.biyao.com/group1/M00/3D/B2/rBACVFsvzfWAO1f-AAAqVXMFl58240.jpg" alt=""/>
              <img src="https://bfs.biyao.com/group1/M00/3B/15/rBACVFsbNhWAWFZ2AACWFHunvC4812.jpg" alt=""/>
            </div>
          </div>
          <div className="doubleleft-item">
            <div className="module-titles">
              <div className="doubleleft-title" style={{color: '#CC7A96'}}>热搜·榜</div>
              <p className="doubleleft-sub-title">都在寻觅的好物</p>
            </div>
            <div className="doubleleft-img">
              <img src="https://bfs.biyao.com/group1/M00/23/D5/rBACYVodH6OAVjdPAABU2hx4_-Y290.jpg" alt=""/>
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
              <img src="https://bfs.biyao.com/group1/M00/32/FD/rBACW1rBid-Af7rDAACBhE6OgLE860.jpg" alt=""/>
            </div>
          </div>
          <div className="triple-item">
            <div className="module-titles">
              <div className="triple-title" style={{color:'#A37ACC'}}>必买·榜</div>
              <p className="triple-sub-title">必粉都爱买</p>
            </div>
            <div className="triple-img">
              <img src="https://bfs.biyao.com/group1/M00/01/F2/rBACYVkT4WaAPH67AABCQA4OSIs840.jpg" alt=""/>
            </div>
          </div>
          <div className="triple-item">
            <div className="module-titles">
              <div className="triple-title" style={{color:'#A37ACC'}}>回购·榜</div>
              <p className="triple-sub-title">买了又买的品质好货</p>
            </div>
            <div className="triple-img">
              <img src="https://bfs.biyao.com/group1/M00/23/7D/rBACYVoXanSAcnUPAACaUk4qrPM608.jpg" alt=""/>
            </div>
          </div>
        </div>
      </Ranking>
    );
  }
}

export default RankingContainer;