import React, { Component } from 'react'

import { Top } from './styledComponent'

class TopContainer extends Component {
  constructor(props) {
    super(props);
    this.returnTop = this.returnTop.bind(this)
  }

  // 点击事件，点击后返回到页面顶部
  returnTop() {
    this.props.recommendScroll.scrollTo(0, 0, 1500)
  }

  render() {
    return (
      <Top {...this.props} onClick={this.returnTop}>
        <svg className="icon-back-top" aria-hidden="true">
          <svg id="icon-backTop" viewBox="0 0 1024 1024" width="100%" height="100%"><path d="M508.25930911 520.72827828m-568.58495244 0a568.58495383 568.58495383 0 1 0 1137.16990626 0 568.58495383 568.58495383 0 1 0-1137.16990626 0Z" fill="#FFFFFF"></path><path d="M216.48545181 625.46761202c0-2.49379299 2.49379299-7.48138039 4.98758739-9.97517478l276.81109515-264.34212736c2.49379299-2.49379299 4.98758739-4.98758739 9.97517476-4.98758738s7.48138039 2.49379299 9.97517478 4.98758738l276.81109652 264.34212736c4.98758739 4.98758739 4.98758739 12.46896778 0 17.45655515-4.98758739 4.98758739-12.46896778 4.98758739-17.45655655 0L508.25930911 381.07583282 238.92959436 635.44278542c-4.98758739 4.98758739-12.46896778 4.98758739-17.45655516 0-2.49379299-2.49379299-4.98758739-7.48138039-4.98758739-9.9751734z" fill="#808081"></path></svg>
        </svg>
      </Top>
    )
  }
}

export default TopContainer