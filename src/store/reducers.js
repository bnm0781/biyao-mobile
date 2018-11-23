import { combineReducers } from 'redux'

import { reducer as commend } from 'pages/home/components/commend'    // commend store 分支

export default combineReducers({
  commend
})