import React, { Component } from 'react'
import Icon from '../Icon'
import propTypes from 'prop-types'
import { withRouter } from 'react-router';

import './header.scss'

/**
 * Component that render the header app, considering
 * the corrent path to render or not.
 */
class Header extends Component {

    constructor(props) {
        super(props)
    }

    render() {

        const { location } = this.props;

        if (location.pathname !== '/error' && location.pathname !== '/')
            return (
                <div className="HeaderContainer">
                    <a
                        className="IconContainer"
                        onClick={() => this.goBackOrUserProfile()}>
                        {location.pathname === '/dashboard' ? <Icon name={'user'} size={26} /> : <Icon name={'arrow-left'} size={26} />}
                    </a>
                    <a className="IconContainer"
                        onClick={() => this.openMenuSettings()}>
                        <Icon name={'menu'} size={26} />
                    </a>
                </div>
            );

        return null;
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

export default withRouter(Header);
