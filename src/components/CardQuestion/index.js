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
      <QuestionDetail className={!toogle && 'hide'} question={questionDetail} />
    </div>
  </Card>
)

const questionDetail = {
  id: 1,
  statement:
    'A advogada Laila representou judicialmente Rita em processo no qual esta postulava a condenação do Município de Manaus ao cumprimento de obrigação de pagar quantia certa. Fora acordado entre Laila e Rita o pagamento de valor determinado à advogada a título de honorários por meio de negócio jurídico escrito e válido. Após o transcurso do processo a Fazenda Pública foi condenada nos termos do pedido autoral. Antes da expedição do precatório Laila juntou aos autos o contrato de honorários no intuito de obter os valores pactuados. Considerando a situação narrada é correto afirmar que',
  studyMaterials: 'dsdjlaksjasdklsjdlkasdjlsjdksladjlsadjla',
  comment: 'djakdadljlsdjsakldsjdslakfhkjdsfjdskfhfksdjf',
  alternative:
    'Laila deverá executar os honorários em face de Rita em processo autônomo sendo vedado o pagamento nos mesmos autos por se tratar de honorários contratuais e não sucumbenciais.',
}

export default CardQuestion
