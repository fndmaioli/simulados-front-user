import React from 'react'

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { getStudent } from 'store/user'
import { getParticipations } from 'store/myExams'
import { fetchParticipations } from 'store/myExams/actions'
import { push } from 'connected-react-router'

class Participations extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    const studentId = this.props.student.id
    this.props.fetchParticipations(studentId)
    console.log('test ' + studentId)
  }

  render() {
    return (
      <div>
        <h1>Selecione uma edição do Exame Oficial da OAB</h1>

        <ul className="space-between-s">
          {this.props.participations.map(participation => (
            <li>{participation.participation_date}</li>
          ))}
        </ul>
      </div>
    )
  }

  async doExam(examId) {
    const studentId = this.props.student.id

    const { exam } = this.props

    if (exam) {
      this.props.push('/simulado')
    } else {
      console.log('Erro ao buscar exame!')
    }
  }
}

const mapStateToProps = state => ({
  participations: getParticipations(state),
  student: getStudent(state),
})

export default connect(
  mapStateToProps,
  dispatch =>
    bindActionCreators(
      {
        fetchParticipations,
        push,
      },
      dispatch,
    ),
)(Participations)
