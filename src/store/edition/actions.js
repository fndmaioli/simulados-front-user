import { createAction } from 'redux-actions'
import http from 'utils/http'
import { growl } from 'store/ui/actions'
import { GROWL_ERROR } from 'store/ui/constants'

const editionsLoaded = createAction('EDITION_LOAD')

const editionList = [
  { name: 'XXIII', year: '2017.2', approval: '17.07%' },
  { name: 'XXII', year: '2017.1', approval: 'N/D' },
  { name: 'XXI', year: '2016.3', approval: 'N/D' },
  { name: 'XX', year: '2016.2', approval: '20,10%' },
  { name: 'XIX', year: '2016.1', approval: '13,28%' },
  { name: 'XVIII', year: '2015.3', approval: '21,14%' },
  { name: 'XVII', year: '2015.2', approval: '28,23%' },
  { name: 'XVI', year: '2015.1', approval: '20,86%' },
  { name: 'XV', year: '2014.3', approval: '26,60%' },
  { name: 'XIV', year: '2014.2', approval: '22,76%' },
  { name: 'XIII', year: '2014.1', approval: '16,65%' },
  { name: 'XII', year: '2013.3', approval: '13,62%' },
  { name: 'XI', year: '2013.2', approval: '14,19%' },
  { name: 'X', year: '2013.1', approval: '28,07%' },
  { name: 'IX', year: '2012.3', approval: '11,43%' },
  { name: 'VIII', year: '2012.2', approval: '11,60%' },
  { name: 'VII', year: '2012.1', approval: '14,67%' },
  { name: 'VI', year: '2011.3', approval: '25,59%' },
  { name: 'V', year: '2011.2', approval: '24,01%' },
  { name: 'IV', year: '2011.1', approval: '15,02%' },
  { name: 'III', year: '2010.3', approval: '11,73%' },
  { name: 'II', year: '2010.2', approval: '16,00%' },
  { name: 'I', year: '2010.1', approval: '14,03%' },
]

const fetchEditions = () => dispatch => {
  http
    .get('http://localhost:3000/editions/')
    .then(editions => dispatch(editionsLoaded(editions)))
    .catch(() => dispatch(growl('Erro ao carregar edições', GROWL_ERROR)))
}
export { editionsLoaded, fetchEditions }
