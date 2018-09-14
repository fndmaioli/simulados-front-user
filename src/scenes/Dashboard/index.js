import React, { Component } from 'react'

import MenuCard from '../../components/MenuCard'
import { ExamService } from '../../services'
import './dashboard.scss'

//TODO: Tela Menu principal com opção de novo simulado
class Dashboard extends Component {
  render() {
    return (
      <div className="mainContainer">
        <h1 className="title">Seja bem-vindo.</h1>
        <h6 className="description">
          Existem diversas formas de se preparar para a prova. Selecione uma
          destas abaixo para darmos inicio.
        </h6>
        <MenuCard
          iconColor="#FE8184"
          icon="clipboard"
          label="Simular Prova"
          buttonLabel="Iniciar"
          description="Selecione e execute uma prova dos anos anteriores"
          onClick={() => this.doExam()}
        />
        <MenuCard
          iconColor="#5E69F5"
          icon="shuffle"
          label="Perguntas Aleatórias"
          buttonLabel="Iniciar"
          description="Prova com perguntas aleatórias de qualquer categoria."
          blueContainer
          onClick={() => this.doRandomExam()}
        />
        <MenuCard
          iconColor="#FE8184"
          icon="clipboard"
          label="Perguntas Especificas"
          buttonLabel="Iniciar"
          description="Prova com perguntas especificas de uma categoria."
          onClick={() => this.doSpecificExam()}
        />
        <MenuCard
          iconColor="#5E69F5"
          icon="shuffle"
          label="Customizado"
          buttonLabel="Iniciar"
          description="Prova com categorias escolhidas por você."
          blueContainer
          onClick={() => this.doCustomExam()}
        />
      </div>
    )
  }

  async doExam() {
    console.log('Buscando teste...')
    const response = await ExamService.fetchExam()

    if (response.success) {
      console.log('Exame buscado com succeso')
      //navegar para próxima tela passando o id exame
    } else {
      console.log('Erro ao buscar o exame')
    }
    console.log(response)
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

export default Dashboard
