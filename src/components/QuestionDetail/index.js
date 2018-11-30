import React, { PureComponent } from 'react'
import { Alternative } from 'components/AlternativeSelection'
import './question-detail.scss'
import cn from 'classnames'

const topicClass = 'space-stack-xs'

const QuestionDetail = ({ className, question }) => (
  <div className={cn(className, 'space-between-m', 'space-y-s')}>
    <div>
      <p className="space-stack-l" style={{ fontSize: 18, lineHeight: 1.4 }}>
        {question.statement}
      </p>
    </div>

    <div>
      <p className={topicClass} style={{ fontWeight: 'bold' }}>
        Alternativa Correta
      </p>
      <Alternative
        key={question.id}
        value={question.id}
        label={question.alternative}
        letter={question.letter}
        selected={true}
        name={question.id}
        onChange={() => null}
      />
    </div>

    <div>
      <p className={topicClass} style={{ fontWeight: 'bold' }}>
        Comentario do Professor
      </p>
      <p className="space-stack-l">
        {question.comment
          ? question.comment
          : 'Esta questão não possui Comentários'}
      </p>
    </div>

    <div>
      <p className={{ topicClass }} style={{ fontWeight: 'bold' }}>
        Material de Apoio
      </p>
      <p>
        {question.studyMaterials
          ? question.studyMaterials
          : 'Esta questão não possui Material de Apoio'}
      </p>
    </div>
  </div>
)

export default QuestionDetail
