import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

import reducers from './reducers'    // 总 reducers

// 创建 store
const store = createStore(reducers, applyMiddleware(thunk))

export default store