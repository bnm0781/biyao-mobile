import { combineReducers } from 'redux-immutable'

import { reducer as home } from 'pages/home'    // home store 分支
import { reducer as nav } from 'common/nav'    // home store 分支

export default combineReducers({
  home,
  nav
})