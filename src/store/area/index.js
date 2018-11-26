import { handleActions } from 'redux-actions'
import { areasLoaded } from './actions'

let initialState = {}

const reducer = handleActions(
  {
    [areasLoaded]: (state, action) => ({
      ...state,
      data: action.payload,
    }),
  },
  initialState,
)

export const getData = state => state.area.data || []

export default reducer
