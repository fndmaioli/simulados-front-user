import React from 'react'
import cn from 'classnames'

import Card from '../Card'

import './alternative-selection.scss'

const Alternative = ({
  name,
  value,
  selected = false,
  label,
  onChange,
  letter = 'a',
}) => (
  <Card
    padding="s"
    onClick={() => onChange(value)}
    className={cn(
      'alternative',
      `alternative--${letter}`,
      selected && 'alternative--selected',
    )}
  >
    <input
      style={{ display: 'none' }}
      className="alternative__bullet"
      type="alternative"
      id={value}
      name={name}
      onChange={onChange}
    />
    <label className="alternative__label" htmlFor={value}>
      <i className="alternative__letter">{letter}</i>
      <p>{label}</p>
    </label>
  </Card>
)

const AlternativeSelection = ({ alternatives, name, onChange, selected }) => (
  <div className="alternative-selection">
    {alternatives.map(a => (
      <Alternative
        key={a.value}
        value={a.value}
        label={a.label}
        letter={a.letter}
        selected={a.value === selected}
        name={name}
        onChange={() => onChange(a)}
      />
    ))}
  </div>
)

export default AlternativeSelection

export { Alternative }
