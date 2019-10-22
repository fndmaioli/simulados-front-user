import React from 'react'

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { fetchResult, fetchQuestionDetail } from 'store/result/actions'
import { getResult } from 'store/result'
import { getParticipationId } from 'store/exam'

import './result.scss'
import Container from 'components/Container'
import Score from 'components/Score'
import CardQuestion from 'components/CardQuestion'
import getTime from 'utils/time'

class Result extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      total: 0,
      time: 0,
      hits: 0,
      display: [],
    }
  }

  componentDidMount() {
    this.props.fetchResult(this.props.participationId).then(this.extractData)
  }

  extractData = () => {
    console.log(this.props.data)
    if (this.props.data.result) {
      let total = 0
      let time = 0
      let hits = 0

      this.props.data.result.forEach(q => {
        time += q.time_to_answer
        hits += q.correct ? 1 : 0
      })

      total = this.props.data.result.length

      this.setState({ total, time, hits })
    }
  }

  getPercent() {
    return Math.round((this.state.hits / this.state.total) * 100, 2)
  }

  toggleQuestions = async (index, questionId) => {
    if (!this.props.data.result[index].detail) {
      await this.props.fetchQuestionDetail(
        this.props.participationId,
        questionId,
      )
    }

    const exist = this.state.display.indexOf(index) !== -1

    const display = exist
      ? this.state.display.filter(i => i !== index)
      : [...this.state.display, index]

    this.setState({ display })
  }

  render() {
    return this.props.data.result ? (
      <Container>
        <Score title={true} hits={this.state.hits} total={this.state.total} />

        <div className="data-result data-result--border-bottom data-result--statistics">
          <div>Porcentagem de acertos</div> <div>{this.getPercent()}%</div>
        </div>
        <div className="data-result data-result--border-bottom data-result--statistics">
          <div>Tempo médio por questão</div>
          <div>{getTime(this.state.time / this.state.total)}</div>
        </div>
        <div className="data-result data-result--border-bottom data-result--statistics space-stack-xl">
          <div>Tempo total</div>
          <div>{getTime(this.state.time)}</div>
        </div>

        <h3>Questões</h3>

        {this.props.data.result.map((question, index) => (
          <CardQuestion
            key={`list-area-${index}`}
            question={question}
            getTime={getTime}
            toogle={this.state.display.indexOf(index) > -1}
            onClick={() => this.toggleQuestions(index, question.id)}
          />
        ))}
      </Container>
    ) : (
      <Container className="error">
        Ops! Ocorreu um arro ao buscar o resultado.
      </Container>
    )
  }
}

const mapStateToProps = state => ({
  data: getResult(state),
  participationId: getParticipationId(state),
})

export default connect(
  mapStateToProps,
  dispatch =>
    bindActionCreators(
      {
        fetchResult,
        fetchQuestionDetail,
      },
      dispatch,
    ),
)(Result)
