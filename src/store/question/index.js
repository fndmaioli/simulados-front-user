import { handleActions } from 'redux-actions'

import { questionsLoaded } from './actions'
import { userLogout } from '../user/actions'

const initialState = {
  numberOfQuestions: 0,
  questions: {},
}

const reducer = handleActions(
  {
    [questionsLoaded]: (state, action) => ({
      ...state,
      questions: {
        ...state.questions,
        [action.payload.examId]: action.payload.questions.map(q => ({
          ...q,
          examId: action.payload.examId,
        })),
      },
      numberOfQuestions: action.payload.total,
    }),
    [userLogout]: state => ({
      ...state,
      questions: [],
    }),
  },
  initialState,
)

export const getNumberOfQuestions = state => state.question.numberOfQuestions

export const getQuestions = state =>
  state.question.questions[state.exam.examId] || []

export default reducer
