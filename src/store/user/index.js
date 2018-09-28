import { handleActions } from 'redux-actions'

import { userLoaded } from './actions'

const initialState = {}

const reducer = handleActions(
  {
    [userLoaded]: (state, action) => ({
      ...state,
      data: action.payload,
    }),
  },
  initialState,
)

export const getData = state => state.user.data

export const getStudent = state => state.user.data.data.user

export default reducer
