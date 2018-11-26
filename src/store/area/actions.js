import { createAction } from 'redux-actions'
import http from 'utils/http'
import { growl } from 'store/ui/actions'
import { GROWL_ERROR } from 'store/ui/constants'
import { API_URL } from '../../config'

const areasLoaded = createAction('AREAS_LOADED')

const fetchAreas = () => dispatch => {
  return http
    .get(`${API_URL}/areas`)
    .then(areas => dispatch(areasLoaded(areas)))
    .catch(error => {
      dispatch(growl('Erro ao buscar áreas. Tente novamente.', GROWL_ERROR))
    })
}

export { areasLoaded, fetchAreas }
