import { createAction } from 'redux-actions'
import http from 'utils/http'
import { API_URL } from '../../config'

const examLoaded = createAction('EXAM_LOADED')

const fetchExam = studentId => dispatch => {
  return http
    .post(`${API_URL}/exam`, {
      data: { student_id: studentId },
    })
    .then(exam => dispatch(examLoaded({ data: exam })))
}

const createParticipation = (studentId, examId) => dispatch => {
  return http
    .post(
      'http://localhost:3000/participation/student/' +
        studentId +
        '/exam/' +
        examId,
      {
        data: {
          student_id: studentId,
          exam_id: examId,
        },
      },
    )
    .then(exam => dispatch(examLoaded({ data: exam, examId: examId })))
}

export { examLoaded, fetchExam, createParticipation }
