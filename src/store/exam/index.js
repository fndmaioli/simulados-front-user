import { handleActions } from 'redux-actions'

import { examLoaded, getExamLoaded } from './actions'
import { userLogout } from '../user/actions'

const initialState = {
  data: {},
}

const reducer = handleActions(
  {
    [examLoaded]: (state, action) => ({
      ...state,
      data: action.payload.data,
      examId: action.payload.examId,
    }),
    [getExamLoaded]: (state, action) => ({
      ...state,
      data: action.payload.data,
      examId: action.payload.examId,
    }),
    [userLogout]: state => ({
      ...state,
      data: {},
    }),
  },
  initialState,
)

export const getExam = state => state.exam
export const getExamId = state => state.exam.examId
export const getParticipationId = state => state.exam.data.participation.id

export default reducer
