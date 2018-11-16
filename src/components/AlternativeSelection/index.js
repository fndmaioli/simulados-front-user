import React from 'react'
import cn from 'classnames'

import './alternative-selection.scss'

export const Alternative = ({
  name,
  value,
  selected = false,
  label,
  onChange,
  letter = 'a',
}) => (
  <div
    className={cn(
      'alternative',
      `alternative--${letter}`,
      selected && 'alternative--selected',
    )}
  >
    <input
      className="alternative__bullet"
      type="alternative"
      id={value}
      name={name}
      onChange={onChange}
    />
    <i classNames="alternative__letter">{letter}</i>
    <label className="alternative__label" htmlFor={value}>
      {label}
    </label>
  </div>
)

const AlternativeSelection = ({ alternatives, name, onChange, selected }) => (
  <div className="alternative-selection">
    {alternatives.map(a => (
      <Alternative
        key={a.value}
        value={a.value}
        label={a.label}
        selected={a.value === selected}
        name={name}
        onChange={() => onChange(a)}
      />
    ))}
  </div>
)

export default AlternativeSelection
