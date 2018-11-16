import { handleActions } from 'redux-actions'

import { userLoaded, userLogout } from './actions'

let initialState = {}

const reducer = handleActions(
  {
    [userLoaded]: (state, action) => ({
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

export const getData = state => (state.user || {}).data || {}

export const getStudent = state => getData(state).user || {}

export const getUsername = state => getStudent(state).username || ''

export const isAuth = state =>
  !!getData(state) && (getData(state).success || false)

export default reducer
