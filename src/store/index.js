import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import Immutable from 'immutable'

import reducers from './reducers'    // 总 reducers

const initialState = Immutable.Map()

// 创建 store
const store = createStore(reducers, initialState, applyMiddleware(thunk))

export default store