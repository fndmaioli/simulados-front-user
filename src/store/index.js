import { combineReducers } from 'redux'
import uiReducer from './ui'
import examReducer from './exam'

export default combineReducers({
  ui: uiReducer,
  exam: examReducer,
})
