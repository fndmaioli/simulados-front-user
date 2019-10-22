import React from 'react'

import './score.scss'

class IncrementingNumber extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      currentValue: 0,
    }
  }

  componentDidMount() {
    const { step, value } = this.props

    const interval = setInterval(() => {
      const { currentValue } = this.state

      console.log(this.state)

      if (currentValue < value) {
        this.setState({ currentValue: currentValue + step })
      } else {
        this.setState({ currentValue: value })
        clearInterval(interval)
      }
    }, 100)
  }

  render() {
    return <span>{this.state.currentValue}</span>
  }
}

class Score extends React.Component {
  getMessage(hits, total) {
    let score = total / 2
    if (hits > score) return 'Aprovado!'
    if (hits === score) return 'Na média!'
    if (hits < score) return 'Reprovado!'
  }

  getClass(hits, total) {
    let score = total / 2
    if (hits > score) return 'score--green'
    if (hits === score) return 'score--yellow'
    if (hits < score) return 'score--red'
  }

  render() {
    const { title, hits, total } = this.props

    const Elem = title ? 'h1' : 'strong'

    return (
      <div className="score">
        <Elem className={this.getClass(hits, total)}>
          {hits ? <IncrementingNumber value={hits} step={1} /> : 0}/{total}
        </Elem>
        {title && <h3>{this.getMessage(hits, total)}</h3>}
      </div>
    )
  }
}

export default Score
