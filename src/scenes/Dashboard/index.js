import React, { Component } from 'react'

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { push } from 'connected-react-router'

import MenuCard from 'components/MenuCard'
import { fetchExam } from 'store/exam/actions'
import { getExam } from 'store/exam'
import { getStudent } from 'store/user'

import './dashboard.scss'

class Dashboard extends Component {
  render() {
    return (
      <div>
        <h1>Seja bem-vindo!</h1>
        <h5 className="dashboard__description">
          Existem diversas formas de se preparar para a prova de exame da ordem.
          Selecione uma destas opções abaixo para dar inicio aos seus estudos.
        </h5>
        <div className="space-between-m">
          <MenuCard
            iconContainerColor="#EAF7E8"
            iconColor="#41C236"
            icon="clipboard"
            label="Responda um Exame Oficial"
            buttonLabel="Iniciar"
            description="Selecione e execute uma prova dos anos anteriores"
            onClick={() => this.doExam()}
          />
          <MenuCard
            disabled
            backColor="#EBEBEB"
            iconContainerColor="#FFD7D7"
            iconColor="#FE8184"
            icon="shuffle"
            label="Exame Aleatório"
            buttonLabel="Iniciar"
            description="Prova com perguntas aleatórias de qualquer categoria."
            onClick={() => this.doRandomExam()}
          />
          <MenuCard
            disabled
            backColor="#EBEBEB"
            iconContainerColor="#AEBAf9"
            iconColor="#5E69F5"
            icon="folder-minus"
            label="Meus Exames"
            buttonLabel="Iniciar"
            description="Meus exames realizados e exames não concluidos."
            onClick={() => this.getMyExams()}
          />

          <MenuCard
            disabled
            backColor="#EBEBEB"
            iconContainerColor="#F2F2F2"
            iconColor="#787878"
            icon="edit"
            label="Monte seu Exame"
            buttonLabel="Iniciar"
            description="Personalize seu exame escolhendo as áreas de sua preferência."
            onClick={() => this.doCustomExam()}
          />

          {/* <MenuCard
            iconContainerColor="#AEBAf9"
            iconColor="#5E69F5"
            icon="clipboard"
            label="Perguntas Especificas"
            buttonLabel="Iniciar"
            description="Prova com perguntas especificas de uma categoria."
            onClick={() => this.doSpecificExam()}
          />
          <MenuCard
            iconContainerColor="#F2F2F2"
            iconColor="#787878"
            icon="settings"
            label="Monte sua prova"
            buttonLabel="Iniciar"
            description="Prova com áreas escolhidas por você."
            onClick={() => this.doCustomExam()}
          /> */}
        </div>
      </div>
    )
  }

  getMyExams() {
    //this.props.push('/meusexames')
    console.log('Não implementado')
  }

  doExam() {
    this.props.push('/edicao')
  }

  doRandomExam() {
    console.log('Não implementado')
  }

  doSpecificExam() {
    console.log('Não implementado ')
  }

  doCustomExam() {
    //this.props.push('/montar')
    console.log('Não implementado')
  }
}

const mapStateToProps = state => ({
  exam: getExam(state),
  student: getStudent(state),
})

export default connect(
  mapStateToProps,
  dispatch =>
    bindActionCreators(
      {
        fetchExam,
        push,
      },
      dispatch,
    ),
)(Dashboard)
