import React from 'react'
import './question-result.scss'

correctAnswer = alternative => {
  ;<div>
    <h4 className="letter">{alternative.letter}</h4>{' '}
    <h6 className="question-result answer--right">{alternative.description}</h6>
  </div>
}

wrongAnswer = alternative => {
  ;<div>
    <h4 className="letter">{alternative.letter}</h4>{' '}
    <h6 className="question-result answer--wrong">{alternative.description}</h6>
  </div>
}

const viewAlternatives = props =>
  props.data.question.alternatives.map(alternative => {
    alternative.id == props.question.correct ? correctAnswer(alternative) : null
    ;(alternative.id == props.alternativeId) != props.question.correct
      ? wrongAnswer(alternative)
      : null
    ;<div>
      <h4 className="letter">{alternative.letter}</h4>{' '}
      <h6 className="question-result answer--right">
        {alternative.description}
      </h6>
    </div>
  })

const QuestionResult = props => (
  <div>
    <p>{props.question.statement}</p>
    {viewAlternatives}
    <h5>'Comentários do professor:' </h5>
    <h6>{props.question.comment}</h6>
    <h5>'Materiais de estudo: '</h5>
    <h6>{props.questions.link}</h6>
  </div>
)

export default QuestionResult
