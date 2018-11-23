import React from 'react'

import Input from 'components/Input'
import EditionItem from 'components/EditionItem'

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { getEditions } from 'store/edition'
import { fetchEditions } from 'store/edition/actions'
import { getStudent } from 'store/user'
import { getExam } from 'store/exam'
import { createParticipation } from 'store/exam/actions'
import romanize from 'utils/romanize'
import { push } from 'connected-react-router'

class Edition extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      inputValue: '',
    }
  }

  componentDidMount() {
    this.props.fetchEditions()
  }

  handleChange = e => {
    this.setState({ inputValue: e.target.value }, () => {})
  }

  async doExam(examId) {
    const studentId = this.props.student.id
    await this.props.createParticipation(studentId, examId)

    const { exam } = this.props

    if (exam) {
      this.props.push('/simulado')
    } else {
      console.log('Erro ao buscar exame!')
    }
  }

  render() {
    return (
      <div>
        <h1>Selecione uma edição do Exame Oficial da OAB</h1>
        <Input
          className="space-stack-m"
          placeholder="Procure uma edição..."
          icon="search"
          value={this.state.inputValue}
          onChange={this.handleChange}
          block
        />
        <ul className="space-between-s">
          {this.props.editions
            .filter(element => {
              const regex = new RegExp(this.state.inputValue, 'gi')
              const name = `${element.aobfunction_exam_year}/${
                element.aob_exam_serial
              }`
              return name.match(regex)
            })
            .map(edition => (
              <EditionItem
                name={'Exame ' + romanize(edition.aob_exam_serial)}
                year={'Ano ' + edition.aob_exam_year}
                onClick={() => this.doExam(edition.id)}
              />
            ))}
        </ul>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  editions: getEditions(state),
  exam: getExam(state),
  student: getStudent(state),
})

export default connect(
  mapStateToProps,
  dispatch =>
    bindActionCreators(
      {
        fetchEditions,
        createParticipation,
        push,
      },
      dispatch,
    ),
)(Edition)
