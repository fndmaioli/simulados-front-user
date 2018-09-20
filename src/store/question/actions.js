import { createAction } from 'redux-actions'
import http from 'utils/http'

const confirmAnswer = createAction('CONFIRM_ANSWER')
const questionsLoaded = createAction('QUESTIONS_LOADED')

const fetchQuestion = (examId, lastQuestion) => dispatch => {
  http
    .get('http://localhost:3000/questions?examId=' + examId)
    .then(questions => dispatch(questionsLoaded(questions.questions)))
    .catch(() => dispatch(questionsLoaded([])))
}
export { confirmAnswer, questionsLoaded, fetchQuestion }
