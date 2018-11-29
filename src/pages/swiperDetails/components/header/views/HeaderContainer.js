import React, { Component } from 'react'
import { fromJS } from 'immutable'
import { withRouter } from 'react-router-dom'

import { Header } from './styledComponent'

class HeaderContainer extends Component {
  constructor(props) {
    super(props);
    this.goToHome = this.goToHome.bind(this)
  }


  shouldComponentUpdate(nextProps) {
    if (fromJS(this.props).equals(fromJS(nextProps))) {
      return false
    } else {
      return true
    }
  }

  goToHome() {
    this.props.history.push('/home')
  }

  render() {
    return (
      <Header>
        <div className="title">
          <span>
            <svg onTouchStart={this.goToHome} className="icon" aria-hidden="true"><svg id="icon-index" viewBox="0 0 1024 1024" width="100%" height="100%"><path d="M234.666667 930.133333h554.666666v-362.666666h181.333334L512 132.266667 53.333333 567.466667H234.666667v362.666666z m-74.666667-405.333333L512 192l352 332.8H746.666667v362.666667h-149.333334v-128h-170.666666v128H277.333333v-362.666667H160z" fill="#4A4A4A"></path></svg></svg>
          </span>
          <p>{this.props.header}</p>
        </div>
      </Header>
    )
  }
}

export default withRouter(HeaderContainer)