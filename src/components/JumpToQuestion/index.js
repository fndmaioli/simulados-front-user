import React from 'react'

import Modal from '../Modal'

import './jump-to-question.scss'

class JumpToQuestion extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  componentDidUpdate() {
    this.inputRef && this.inputRef.focus()
  }

  render() {
    const { search = '' } = this.state
    const questions = this.props.questions
      .filter(q => `${q.id}`.includes(search.toLowerCase()))
      .slice(0, 10)

    return (
      <Modal
        className="jump-to-question"
        open={this.props.open}
        onClose={this.props.onClose}
      >
        <input
          ref={ref => (this.inputRef = ref)}
          onChange={e => this.setState({ search: e.target.value })}
          className="jump-to-question__search"
          placeholder="Número da questão"
        />
        <ul
          className="jump-to-question__list"
          style={{ height: questions.length * 35 }}
        >
          {questions.map(q => (
            <li
              key={q.id}
              className="jump-to-question__option"
              onClick={() => {
                this.setState({ search: '' })
                this.props.onClose()
                this.props.onSelect(q)
              }}
            >
              <span style={{ color: 'rgba(25, 23, 17, 0.6)' }}>Questão</span>{' '}
              {q.id}
            </li>
          ))}
        </ul>
      </Modal>
    )
  }
}

export default JumpToQuestion
