import { combineReducers } from 'redux'
import uiReducer from './ui'
import examReducer from './exam'
import questReducer from './question'
import userReducer from './user'
import editionsReducer from './edition'
import resultReducer from './result'

export default combineReducers({
  ui: uiReducer,
  exam: examReducer,
  question: questReducer,
  user: userReducer,
  editions: editionsReducer,
  result: resultReducer,
})
