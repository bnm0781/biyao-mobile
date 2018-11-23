import { POST_COMMENDLIST_DATA } from './actionTypes'

const defaultState = {
  commendList: []
}

export default (state = defaultState, action) => {
  switch (action.type) {
    case POST_COMMENDLIST_DATA:
      return {
        commendList: [ ...state.commendList, ...action.commendList ]
      }
    default:
      return state
  }
}