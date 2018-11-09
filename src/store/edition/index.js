import { handleActions } from 'redux-actions'

import { editionsLoaded } from './actions'
import { userLogout } from '../user/actions'

const initialState = {
  editions: [],
}

const reducer = handleActions(
  {
    [editionsLoaded]: (state, action) => ({
      ...state,
      editions: action.payload,
    }),
    [userLogout]: state => ({
      ...state,
      editions: [],
    }),
  },
  initialState,
)

export const getEditions = state => state.editions.editions

export default reducer
