import React, { Component } from 'react';
import './dashboard.css';
import Header from '../../components/header'

//TODO: Tela Menu principal com opção de novo simulado 
class Dashboard extends Component {

    constructor(props) {
        super(props)
    }

    render() {

        return (
            <div className='MainContainer'>
                <Header isDashboard={true} />
                <h1>TELA DASHBOARD</h1>                
            </div>
        );
    }
   
}

export default Dashboard;
