import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { Route, Switch, Router } from 'react-router';
import Dashboard from '../src/scenes/dashboard';
import { createBrowserHistory } from 'history';

const history = createBrowserHistory();

ReactDOM.render(
    <App>
        <Router history={history}>
            <Switch>
                <Route exact path="/" component={Dashboard} />                
                <Route render={() => 404} />
            </Switch>
        </Router>
    </App>,
    document.getElementById('root'));
registerServiceWorker();
