import { createAction } from 'redux-actions'
import http from 'utils/http'
import { growl } from 'store/ui/actions'
import { GROWL_ERROR } from 'store/ui/constants'
import { API_URL } from '../../config'

const confirmAnswer = createAction('CONFIRM_ANSWER')
const questionsLoaded = createAction('QUESTIONS_LOADED')

const fetchQuestion = examId => dispatch => {
  return http
    .get(`${API_URL}/questions/` + examId)
    .then(res =>
      dispatch(questionsLoaded({ examId, questions: res.questions })),
    )
    .catch(() => dispatch(growl('Erro ao carregar questões', GROWL_ERROR)))
}

const fetchMoreQuestion = (examId, lastQuestion) => dispatch => {
  http
    .get(`${API_URL}/questions/` + examId + '/' + lastQuestion.id)
    .then(questions => dispatch(questionsLoaded(questions)))
    .catch(() => dispatch(growl('Erro ao carregar questões', GROWL_ERROR)))
}

const answerQuestion = (
  participationId,
  questionId,
  alternativeId,
) => dispatch => {
  return http
    .post(`${API_URL}/answer/`, {
      data: {
        participation_id: participationId,
        question_id: questionId,
        alternative_id: alternativeId,
        time_to_answer: 1,
      },
    })
    .then(answer => dispatch(confirmAnswer(answer)))
    .catch(() => dispatch(growl('Erro ao responder questão', GROWL_ERROR)))
}

export {
  confirmAnswer,
  questionsLoaded,
  fetchQuestion,
  fetchMoreQuestion,
  answerQuestion,
}
