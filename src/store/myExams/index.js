import { handleActions } from 'redux-actions'

import { participationsLoaded } from './actions'
import { userLogout } from '../user/actions'

const initialState = { participations: [] }

const reducer = handleActions(
  {
    [participationsLoaded]: (state, action) => ({
      ...state,
      participations: action.payload.participations,
    }),
    [userLogout]: state => ({
      ...state,
      participations: [],
    }),
  },
  initialState,
)

export const getParticipations = state => state.participations.participations

export default reducer
