import { createAction } from 'redux-actions'
import http from 'utils/http'
import { growl } from 'store/ui/actions'
import { GROWL_ERROR } from 'store/ui/constants'
import { API_URL } from '../../config'

const userLoaded = createAction('USER_LOADED')
const userLogout = createAction('USER_LOGOUT')

const login = (email, password) => dispatch => {
  return http
    .post(`${API_URL}/signin`, {
      data: {
        email: email,
        password: password,
      },
    })
    .then(user => dispatch(userLoaded(user)))
    .catch(error => {
      dispatch(
        growl(
          error.message === '400'
            ? 'Credenciais inválidas. Tente novamente'
            : 'Erro ao efetuar login. Tente novamente',
          GROWL_ERROR,
        ),
      )
    })
}

export { userLoaded, login, userLogout }
