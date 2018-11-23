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

export const getAreas = state => state.area.data.areas || []

export default reducer
