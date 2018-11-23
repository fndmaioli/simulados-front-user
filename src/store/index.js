import { combineReducers } from 'redux'
import uiReducer from './ui'
import examReducer from './exam'
import questReducer from './question'
import userReducer from './user'
import editionsReducer from './edition'
import areaReducer from './area'

export default combineReducers({
  ui: uiReducer,
  exam: examReducer,
  question: questReducer,
  user: userReducer,
  editions: editionsReducer,
  area: areaReducer,
})
