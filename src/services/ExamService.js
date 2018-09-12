import http from '../utils/http'

/**
 * Service class that contains the requests
 * related to exams.
 */
export default class ExamService {
  static async fetchExam() {
    return await http
      .post('http://localhost:3000/exam', {
        data: { student_id: 1 },
      })
      .then(result => {
        return result
      })
      .catch(err => {
        return err
      })
  }
}
