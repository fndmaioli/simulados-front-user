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
      result: [
        ...state.result.result.filter(q => {
          if (q.id === action.payload.questionDetail[0].id) {
            return {
              ...q,
              detail: action.payload.questionDetail[0],
            }
          }
          return q
        }),
      ],
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
