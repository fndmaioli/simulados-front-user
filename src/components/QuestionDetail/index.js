import React, { PureComponent } from 'react'
import { Alternative } from 'components/AlternativeSelection'
import './question-detail.scss'

const QuestionDetail = ({ className, question }) => (
  <div className={className}>
    <h4>Enunciado:</h4>
    <p>{question.statement}</p>
    <h4>Alternativa:</h4>
    <p>{question.alternative}</p>
    <h4>Comentario:</h4>
    <p>{question.comment}</p>
    <h4>MAterial de apoio:</h4>
    <p>{question.studyMaterials}</p>
  </div>
)

export default QuestionDetail
