import { handleActions } from 'redux-actions'

import { examLoaded } from './actions'
import { userLogout } from '../user/actions'

const initialState = {}

const reducer = handleActions(
  {
    [examLoaded]: (state, action) => ({
      ...state,
      data: action.payload,
    }),
    [userLogout]: state => ({
      ...state,
      data: {},
    }),
  },
  initialState,
)

export const getExam = state => state.exam

export const getExamId = state => state.exam.data.exam.id

export default reducer
