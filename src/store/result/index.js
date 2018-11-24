import { handleActions } from 'redux-actions'

import { resultLoaded, questionLoaded } from './actions'
import { userLogout } from '../user/actions'

const initialState = {
  result: {},
}

const reducer = handleActions(
  {
    [resultLoaded]: (state, action) => ({
      ...state,
      result: action.payload,
    }),
    [questionLoaded]: (state, action) => ({
      ...state,
      questionDetail: action.payload,
    }),
    [userLogout]: state => ({
      ...state,
      result: {},
      questionDetail: {},
    }),
  },
  initialState,
)

export const getResult = state => state.result.result

export default reducer
