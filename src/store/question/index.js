import { handleActions } from 'redux-actions'

import { confirmAnswer, questionsLoaded, fetchQuestion } from './actions'

const initialState = {
  questions: [],
}

const reducer = handleActions({
  [questionsLoaded]: (state, action) => ({
    ...state,
    questions: action.payload.questions,
  }),
  initialState,
})

export const getQuestions = state => state.questions

export default reducer
