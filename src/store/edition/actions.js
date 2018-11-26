import { createAction } from 'redux-actions'
import http from 'utils/http'
import { API_URL } from '../../config'
import { growl } from 'store/ui/actions'
import { GROWL_ERROR } from 'store/ui/constants'

const editionsLoaded = createAction('EDITION_LOAD')

const fetchEditions = () => dispatch => {
  http
    .get(`${API_URL}/exams/oab`)
    .then(editions => dispatch(editionsLoaded(editions)))
    .catch(() => dispatch(growl('Erro ao carregar edições', GROWL_ERROR)))
}
export { editionsLoaded, fetchEditions }
