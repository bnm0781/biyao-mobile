import { fromJS } from 'immutable'
import { POST_CATEGORYLIST_DATA } from './actionTypes'

const defaultState = fromJS({
  categoryList: []
})

export default (state = defaultState, action) => {
  switch (action.type) {
    case POST_CATEGORYLIST_DATA:
      return state.setIn(['categoryList'], fromJS(action.categoryList))
    default:
      return state
  }
}