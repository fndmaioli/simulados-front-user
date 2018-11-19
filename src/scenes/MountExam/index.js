import React from 'react'

import Input from 'components/Input'
import AreaItem from 'components/AreaItem'

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { getEditions } from 'store/edition'
import { getStudent } from 'store/user'
import { getExam } from 'store/exam'
import { createParticipation } from 'store/exam/actions'
import { push } from 'connected-react-router'

class MountExam extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      selectedAreas: [],
    }
  }

  componentDidMount() {
    //chamar rota de buscar edições
  }

  render() {
    return (
      <div>
        <h2>Selecione ás áreas que você deseja no seu exame</h2>
        <ul className="space-between-s">
          {this.props.areas.map(area => (
            <AreaItem
              area={area}
              name={area.name}
              onClick={area => this.toggleArea(area)} //adicionar aos selecionados
            />
          ))}
        </ul>
      </div>
    )
  }

  toggleArea(selectedArea) {
    const selectedAreas = this.state.selectedAreas
    const index = selectedAreas.findIndex(area => area.id == selectedArea.id)

    if (index !== -1) {
      selectedAreas.splice(index, 1)
      console.log(selectedAreas)
    } else {
      selectedAreas.push(selectedArea)
      console.log(selectedAreas)
    }

    this.setState({ selectedAreas })
  }

  async doExam(examId) {
    //TODO fazer o exame montado
    const studentId = this.props.student.id
    await this.props.createParticipation(studentId, examId)

    const { exam } = this.props

    if (exam) {
      this.props.push('/simulado')
    } else {
      console.log('Erro ao buscar exame!')
    }
  }
}

const mapStateToProps = state => ({
  areas: [
    {
      //TODO: REMOVER MOCK QUANDO TIVER A ROTA
      id: 1,
      name: 'Direito Civil',
    },
    {
      id: 2,
      name: 'Direito comercial ou empresarial',
    },
    {
      id: 3,
      name: 'Direito do consumidor',
    },
    {
      id: 4,
      name: 'Direito da tecnologia da informação',
    },
    {
      id: 5,
      name: 'Direito tributário',
    },
    {
      id: 6,
      name: 'Direito administrativo',
    },
    {
      id: 7,
      name: 'Direito previdenciário',
    },
    {
      id: 8,
      name: 'Direito penal ou criminal',
    },
    {
      id: 9,
      name: 'Mediação, conciliação e arbitragem',
    },
  ],
  exam: getExam(state),
  student: getStudent(state),
})

export default connect(
  mapStateToProps,
  dispatch =>
    bindActionCreators(
      {
        createParticipation,
        push,
      },
      dispatch,
    ),
)(MountExam)
