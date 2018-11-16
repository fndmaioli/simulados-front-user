import { createAction } from 'redux-actions'
import http from 'utils/http'
import { growl } from 'store/ui/actions'
import { GROWL_ERROR } from 'store/ui/constants'

const editionsLoaded = createAction('EDITION_LOAD')

const fetchEditions = () => dispatch => {
  http
    .get('http://localhost:3000/exams/oab')
    .then(editions => dispatch(editionsLoaded(editions)))
    .catch(() => dispatch(growl('Erro ao carregar edições', GROWL_ERROR)))
}
export { editionsLoaded, fetchEditions }
