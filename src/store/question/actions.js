import { createAction } from 'redux-actions'
import http from 'utils/http'

const confirmAnswer = createAction('CONFIRM_QUESTIOM')
const questionsLoaded = createAction('QUESTIONS_LOADED')

const fetchQuestion = (participation, lastQuestion) => dispatch => {
  http
    .get(
      'localhost:8080/questions?examId=' +
        participation.examId +
        '&lastQuestion=' +
        lastQuestion,
    )
    .then(questions => dispatch(questionsLoaded(questions)))
}
export { confirmAnswer, questionsLoaded, fetchQuestion }
