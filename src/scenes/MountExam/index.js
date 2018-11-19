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
              onClick={area => this.toggleArea(area)}
              selected={area.selected}
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
      selectedArea.selected = false
      selectedAreas.splice(index, 1)
    } else {
      selectedArea.selected = true
      selectedAreas.push(selectedArea)
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
      selected: false,
    },
    {
      id: 2,
      name: 'Direito comercial ou empresarial',
      selected: false,
    },
    {
      id: 3,
      name: 'Direito do consumidor',
      selected: false,
    },
    {
      id: 4,
      name: 'Direito da tecnologia da informação',
      selected: false,
    },
    {
      id: 5,
      name: 'Direito tributário',
      selected: false,
    },
    {
      id: 6,
      name: 'Direito administrativo',
      selected: false,
    },
    {
      id: 7,
      name: 'Direito previdenciário',
      selected: false,
    },
    {
      id: 8,
      name: 'Direito penal ou criminal',
      selected: false,
    },
    {
      id: 9,
      name: 'Mediação, conciliação e arbitragem',
      selected: false,
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
