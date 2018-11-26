import { createAction } from 'redux-actions'
import http from 'utils/http'
import { growl } from 'store/ui/actions'
import { GROWL_ERROR } from 'store/ui/constants'
import { API_URL } from '../../config'

const participationsLoaded = createAction('PARTICIPATIONS_LOAD')

const fetchParticipations = studentId => dispatch => {
  return http
    .get(`${API_URL}/participations/student/` + studentId)
    .then(participations => dispatch(participationsLoaded(participations)))
    .catch(() => dispatch(growl('Erro ao carregar meu exames', GROWL_ERROR)))
}

export { participationsLoaded, fetchParticipations }
