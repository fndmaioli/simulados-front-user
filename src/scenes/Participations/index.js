import React from 'react'

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { getStudent } from 'store/user'
import { getExamLoaded } from 'store/exam/actions'
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
            <Card
              onClick={event =>
                this.goToQuestions(
                  participation.id,
                  participation.practise_exam_id,
                )
              }
            >
              {new Date(participation.participation_date).toLocaleDateString()}
            </Card>
          ))}
        </Title>
      </div>
    )
  }

  async goToQuestions(participationId, examId) {
    this.props.getExamLoaded({
      data: {
        participation: {
          id: participationId,
        },
      },
      examId: examId,
    })

    this.props.push('/simulado')
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
        getExamLoaded,
        fetchParticipations,
        push,
      },
      dispatch,
    ),
)(Participations)
