import React, { Component } from 'react'

import { Comment } from './styledComponent'

class CommentContainer extends Component {
  render() {
    return (
      <Comment>
        <div className="no-comment">暂无评价（暂无，购物后记得来评价哦）</div>
      </Comment>
    )
  }
}

export default CommentContainer