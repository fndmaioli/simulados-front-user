import React, { Component } from 'react'
import Card from '../Card'
import Icon from '../Icon'
import Score from '../Score'
import './card-question.scss'
import cn from 'classnames'
import QuestionDetail from 'components/QuestionDetail'

const CardQuestion = ({ question, getTime, toogle, onClick }) => (
  <Card
    className={cn('card-question', toogle && 'card-question--expanded')}
    onClick={onClick}
  >
    <div className="data-result data-result--questionsRow">
      <div className="flexQuestion">
        <div className="flexQuestion--question">Questão {question.id}</div>
        <div className="flexQuestion--area">{`(${question.areaName}/${
          question.subName
        })`}</div>
      </div>

      <div className="flexQuestion">
        <Icon
          name={question.correct ? 'check' : 'x'}
          color={question.correct ? '#629c44' : '#e61610'}
        />

        <div className="flexQuestion--time">
          {getTime(question.time_to_answer)}
        </div>

        <Icon name={toogle ? 'chevron-up' : 'chevron-down'} />
      </div>
    </div>
    <div className="card-question_toggle-questions">
      <QuestionDetail
        className={!toogle && 'hide'}
        question={question.detail ? question.detail : {}}
      />
    </div>
  </Card>
)

export default CardQuestion
