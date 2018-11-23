import { fromJS, Map } from 'immutable'
import { POST_COMMENDLIST_DATA, POST_COMMENDLIST_DATA_AGAIN } from './actionTypes'

const defaultState = fromJS({
  commendList: []
})

export default (state = defaultState, action) => {
  switch (action.type) {
    case POST_COMMENDLIST_DATA:
      return state.setIn(['commendList'], fromJS(action.commendList))
    case POST_COMMENDLIST_DATA_AGAIN:
      return Map({commendList: state.getIn(['commendList']).concat(fromJS(action.commendListAgain))})
    default:
      return state
  }
}