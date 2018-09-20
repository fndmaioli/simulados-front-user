import { handleActions } from 'redux-actions'

import { examLoaded } from './actions'

const initialState = {}

const reducer = handleActions(
  {
    [examLoaded]: (state, action) => ({
      ...state,
      data: action.payload,
    }),
  },
  initialState,
)

export const getExam = state => state.exam

export const getExamId = state => state.exam.id

export default reducer
