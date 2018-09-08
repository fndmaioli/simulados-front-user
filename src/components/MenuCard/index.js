import React, { Component } from 'react'
import propTypes from 'prop-types'
import cn from 'classnames'

import Card from '../Card'
import Icon from '../Icon'
import Button from '../Button'

import './menucard.scss'

/**
 * Component to display the menu cards.
 */
class MenuCard extends Component {

    render() {

        const { onClick, iconColor, icon, label, buttonLabel, blueContainer } = this.props;

        return (
            <Card className='card' >
                <div className={cn('iconContainer', blueContainer && 'iconContainer--blue')}>
                    <Icon
                        name={icon}
                        height={32}
                        width={50}
                        color={iconColor} />
                </div>
                <p className='text'>{label}</p>
                <Button className='cardButton' onClick={onClick}>{buttonLabel}</Button>
            </Card>
        );
    }

}

/**
 * MenuCard custom props.
 */
MenuCard.propTypes = {
    iconColor: propTypes.string,
    icon: propTypes.string,
    buttonLabel: propTypes.string,
    label: propTypes.string,
    blueContainer: propTypes.bool,
    onClick: propTypes.func
}

/**
* MenuCard default value props.
*/
MenuCard.defaultProps = {
    label: 'lorem ipsum',
    buttonLabel: 'continue',
    onClick: () => { },
}

export default MenuCard;