import React, { Component } from 'react'
import Icon from '../Icon'
import propTypes from 'prop-types'

import './header.scss'

/**
 * Component that render the header app, considering
 * the isDashboard prop to render the correct left
 * icon (user or arrow-left).
 */
class Header extends Component {

    constructor(props) {
        super(props)
    }

    render() {

        const { isDashboard } = this.props;

        return (
            <div className="HeaderContainer">
                <a
                    className="IconContainer"
                    onClick={() => this.goBackOrUserProfile()}>
                    {isDashboard ? <Icon name={'user'} size={26} /> : <Icon name={'arrow-left'} size={26} />}
                </a>
                <a className="IconContainer"
                    onClick={() => this.openMenuSettings()}>
                    <Icon name={'menu'} size={26} />
                </a>
            </div>
        );
    }

    /**
     * Go back or open user profile, validating
     * with the isDashboard prop received.
     */
    goBackOrUserProfile() {

        if (this.props.isDashboard) {
            console.log('abrindo perfil...')

        } else {
            console.log('Voltando para pagina anterior...')
        }
    }

    /**
     * Open the menu.
     */
    openMenuSettings() {
        console.log('abrindo menu...')
    }
}

/**
 * Header custom props.
 */
Header.propTypes = {
    isDashboard: propTypes.bool
}

/**
 * Header default value props.
 */
Header.defaultProps = {
    isDashboard: false
}

export default Header;
