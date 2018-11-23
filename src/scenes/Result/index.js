import React from 'react'

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { fetchResult } from 'store/result/actions'
import { getResult } from 'store/result'
import { getParticipationId } from 'store/exam'

import './result.scss'
import Container from 'components/Container'
import Score from 'components/Score'
import CardQuestion from 'components/CardQuestion'
import { throws } from 'assert'
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
    if (this.props.data.result) {
      let total = 0
      let time = 0
      let hits = 0

      this.props.data.result.forEach(r => {
        time += r.total_time
        hits += r.questions.filter(q => q.correct).length
        total += r.questions.length
      })

      this.setState({ total, time, hits })
    }
  }

  getPercent() {
    return Math.round((this.state.hits / this.state.total) * 100, 2)
  }

  toggleQuestions = index => {
    const exist = this.state.display.indexOf(index) !== -1
    console.log(index)
    const display = exist
      ? this.state.display.filter(i => i !== index)
      : [...this.state.display, index]
    console.log(display)
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
          <div>Tempo médio por questão</div>{' '}
          <div>{getTime(this.state.time)}</div>
        </div>
        <div className="data-result data-result--border-bottom data-result--statistics space-stack-xl">
          <div>Tempo total</div>{' '}
          <div>{getTime(this.state.time / this.state.total)}</div>
        </div>

        <h3>Questões</h3>

        {this.props.data.result.map((area, index) => (
          <CardQuestion
            key={`list-area-${index}`}
            area={area}
            getTime={getTime}
            toogle={this.state.display.indexOf(index) > -1}
            onClick={() => this.toggleQuestions(index)}
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
      },
      dispatch,
    ),
)(Result)
