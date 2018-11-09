import { createAction } from 'redux-actions'
import http from 'utils/http'
import { growl } from 'store/ui/actions'
import { GROWL_ERROR } from 'store/ui/constants'

const confirmAnswer = createAction('CONFIRM_ANSWER')
const questionsLoaded = createAction('QUESTIONS_LOADED')

const fetchQuestion = examId => dispatch => {
  http
    .get('http://10.132.241.25:3000/questions/' + examId)
    .then(questions => dispatch(questionsLoaded(questions)))
    .catch(() => dispatch(growl('Erro ao carregar questões', GROWL_ERROR)))
}

const fetchMoreQuestion = (examId, lastQuestion) => dispatch => {
  http
    .get(
      'http://10.132.241.25:3000/questions/' + examId + '/' + lastQuestion.id,
    )
    .then(questions => dispatch(questionsLoaded(questions)))
    .catch(() => dispatch(growl('Erro ao carregar questões', GROWL_ERROR)))
}

const answerQuestion = (
  participationId,
  questionId,
  alternativeId,
) => dispatch => {
  return http
    .post('http://10.132.241.25:3000/answer/', {
      data: {
        participation_id: participationId,
        question_id: questionId,
        alternative_id: alternativeId,
        time_to_answer: 1,
      },
    })
    .then(answer => dispatch(confirmAnswer(answer)))
}

export {
  confirmAnswer,
  questionsLoaded,
  fetchQuestion,
  fetchMoreQuestion,
  answerQuestion,
}
