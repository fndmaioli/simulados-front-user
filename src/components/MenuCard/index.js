import React, { Component } from 'react'
import propTypes from 'prop-types'

import Card from '../Card'
import Icon from '../Icon'
import Button from '../Button'

import './menucard.scss'

/**
 * Component to display a menu card.
 */
const MenuCard = ({
  onClick,
  iconColor,
  icon,
  label,
  buttonLabel,
  description,
  iconContainerColor,
  smallWindow,
}) => (
  <Card
    className="flex menucard"
    onTouchEnd={onClick}
    onClick={smallWindow ? onClick : null}
  >
    <div class="flex menucard__innercontainer">
      <div
        class="flex items-center menucard__iconcontainer"
        style={{ background: iconContainerColor }}
      >
        <Icon
          className="menucard__icon"
          name={icon}
          height={34}
          width={52}
          color={iconColor}
        />
      </div>
      <div class="flex flex-column flex-auto menucard__textscontainer">
        <h3 class="space-stack-s menucard__text">{label}</h3>
        <p class="menucard__description">{description}</p>
      </div>
      <div class="menucard__buttoncontainer">
        <Button className="flex self-center" ghost onClick={onClick}>
          {buttonLabel}
        </Button>
      </div>
    </div>
  </Card>
)

/**
 * MenuCard custom props.
 */
MenuCard.propTypes = {
  iconColor: propTypes.string,
  iconContainerColor: propTypes.string,
  icon: propTypes.string,
  buttonLabel: propTypes.string,
  label: propTypes.string,
  onClick: propTypes.func,
  description: propTypes.string,
  smallWindow: propTypes.bool,
}

export default MenuCard
