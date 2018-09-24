import { combineReducers } from 'redux'
import uiReducer from './ui'
import examReducer from './exam'
import questReducer from './question'
import userReducer from './user'

export default combineReducers({
  ui: uiReducer,
  exam: examReducer,
  question: questReducer,
  user: userReducer,
})
