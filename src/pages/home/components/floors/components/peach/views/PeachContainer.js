import React, { Component } from 'react';

import { Peach } from './styledComponent'
import { TitleContainer as Title } from 'common/title'


class PeachContainer extends Component {
  render() {
    return (
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
    );
  }
}

export default PeachContainer;