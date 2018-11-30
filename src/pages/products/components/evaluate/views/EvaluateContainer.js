import React, { Component } from 'react'

import { Evaluate } from './styledComponent'
import { CommentContainer as Comment } from '../components/comment'
import { SupplierContainer as Supplier } from '../components/supplier'

class EvaluateContainer extends Component {
  render() {
    return (
      <Evaluate id="evaluate">
        <Comment></Comment>
        <Supplier></Supplier>
      </Evaluate>
    )
  }
}

export default EvaluateContainer