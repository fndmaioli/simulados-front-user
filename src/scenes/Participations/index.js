import React from 'react'

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { getStudent } from 'store/user'
import { getParticipations } from 'store/myExams'
import { fetchParticipations } from 'store/myExams/actions'
import { push } from 'connected-react-router'
import Card from 'components/Card'

const Title = ({ title, children }) => (
  <div className="example">
    <h3>{title}</h3>
    <hr />
    <div className="example__content">{children}</div>
  </div>
)

class Participations extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    const studentId = this.props.student.id
    this.props.fetchParticipations(studentId)
  }

  render() {
    return (
      <div>
        <h1>Selecione um Exame que você já fez.</h1>

        <Title className="space-between-s">
          {this.props.participations.map(participation => (
            <Card>{this.getDateFormat(participation.participation_date)}</Card>
          ))}
        </Title>
      </div>
    )
  }

  goToQuestions(participationId) {
    const studentId = this.props.student.id
    this.props.push('/simulado')
  }

  getDateFormat(date) {
    if (date == undefined || date == null) {
      return 'Data não informada'
    }
    const datestring =
      date.getDate() +
      '-' +
      (date.getMonth() + 1) +
      '-' +
      date.getFullYear() +
      ' '
    return datestring
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
