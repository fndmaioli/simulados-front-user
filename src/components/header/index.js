import React, { Component } from 'react';
import './header.css';
import IconMenu from 'react-feather/dist/icons/menu';
import UserMenu from 'react-feather/dist/icons/user';
import ArrowLeft from 'react-feather/dist/icons/arrow-left';
import propTypes from 'prop-types';

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
                   {isDashboard ? <UserMenu size={26} /> :  <ArrowLeft size={26} /> } 
                </a>
                <a className="IconContainer"
                onClick={() => this.openMenuSettings()}>
                    <IconMenu size={26} />
                </a>
            </div>
        );
    }

    /**
     * Go back or open user profile, validating
     * with the isDashboard prop received.
     */
    goBackOrUserProfile(){

        if (this.props.isDashboard) {
            console.log('abrindo perfil...')
            
        } else {
            console.log('Voltando para pagina anterior...')
        }        
    }

    /**
     * Open the menu.
     */
    openMenuSettings(){
        console.log('abrindo menu...')
    }
}

/**
 * Header custom props.
 */
Header.propTypes = {
    isDashboard : propTypes.bool
}

/**
 * Header default value props.
 */
Header.defaultProps = {
    isDashboard : false
}

export default Header;
