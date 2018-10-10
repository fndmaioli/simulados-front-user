import { handleActions } from 'redux-actions'

import { questionsLoaded } from './actions'
import { userLogout } from '../user/actions'

const initialState = {
  lastQuestion: -1,
  questions: {},
}

const reducer = handleActions(
  {
    [questionsLoaded]: (state, action) => ({
      ...state,
      questions: {
        ...state.questions,
        [action.payload[action.payload.length - 1].id]: action.payload,
      },
      lastQuestion: action.payload[action.payload.length - 1].id,
    }),
    [userLogout]: state => ({
      ...state,
      questions: [],
    }),
  },
  initialState,
)

export const getQuestions = state =>
  Object.values(state.question.questions).reduce(
    (acc, p) => [...acc, ...p],
    [],
  ) || []

export default reducer
