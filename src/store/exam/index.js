import { handleActions } from 'redux-actions'

import { examLoaded } from './actions'

const initialState = {
  exam: {},
}

const reducer = handleActions(
  {
    [examLoaded]: (state, action) => ({
      ...state,
      data: action.payload,
    }),
  },
  initialState,
)

export default reducer
