import { createAction } from 'redux-actions'
import http from 'utils/http'

const examLoaded = createAction('EXAM_LOADED')

const fetchExam = studentId => dispatch => {
  return http
    .post('http://192.168.0.128:3000/exam', {
      data: { student_id: studentId },
    })
    .then(exam => dispatch(examLoaded(exam)))
}
export { examLoaded, fetchExam }
