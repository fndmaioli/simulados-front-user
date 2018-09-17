import React, { Component } from 'react'

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import MenuCard from 'components/MenuCard'
import { fetchExam } from 'store/exam/actions'

import './dashboard.scss'

class Dashboard extends Component {
  constructor(props) {
    super(props)
    this.state = {
      smallWindow: null,
    }
  }

  componentDidMount() {
    window.addEventListener('resize', () => this.checkResize())
  }

  checkResize() {
    this.setState({ smallWindow: window.innerWidth <= 720 })
  }

  render() {
    return (
      <div>
        <h1 className="dashboard__title">Seja bem-vindo.</h1>
        <h6 className="dashboard__description">
          Existem diversas formas de se preparar para a prova. Selecione uma
          destas abaixo para darmos inicio.
        </h6>
        <MenuCard
          iconContainerColor="#EAF7E8"
          iconColor="#41C236"
          icon="clipboard"
          label="Simular Prova"
          buttonLabel="Iniciar"
          description="Selecione e execute uma prova dos anos anteriores"
          smallWindow={this.state.smallWindow}
          onClick={() => this.doExam()}
        />
        <MenuCard
          iconContainerColor="#FFD7D7"
          iconColor="#FE8184"
          icon="shuffle"
          label="Perguntas Aleatórias"
          buttonLabel="Iniciar"
          description="Prova com perguntas aleatórias de qualquer categoria."
          smallWindow={this.state.smallWindow}
          onClick={() => this.doRandomExam()}
        />
        <MenuCard
          iconContainerColor="#AEBAf9"
          iconColor="#5E69F5"
          icon="clipboard"
          label="Perguntas Especificas"
          buttonLabel="Iniciar"
          description="Prova com perguntas especificas de uma categoria."
          smallWindow={this.state.smallWindow}
          onClick={() => this.doSpecificExam()}
        />
        <MenuCard
          iconContainerColor="#F2F2F2"
          iconColor="#787878"
          icon="shuffle"
          label="Customizado"
          buttonLabel="Iniciar"
          description="Prova com categorias escolhidas por você."
          smallWindow={this.state.smallWindow}
          onClick={() => this.doCustomExam()}
        />
      </div>
    )
  }

  async doExam() {
    console.log('Buscando exame...')
    await this.props.fetchExam(1)

    const { exam } = this.props

    if (exam.success) {
      console.log('Exame buscado com sucesso!')
      //navegar para tela de fazer a prova
    } else {
      console.log('Erro ao buscar exame!')
    }

    console.log(this.props.exam)
  }

  doRandomExam() {
    console.log('Buscar exame com perguntas aleatorias...')
  }

  doSpecificExam() {
    console.log('Buscar exame com perguntas especificas...')
  }

  doCustomExam() {
    console.log('Buscar exame perguntas customizadas...')
  }
}

const mapStateToProps = state => ({
  exam: state.exam.data,
})

export default connect(
  mapStateToProps,
  dispatch =>
    bindActionCreators(
      {
        fetchExam,
      },
      dispatch,
    ),
)(Dashboard)
