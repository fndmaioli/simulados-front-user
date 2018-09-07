import './stylesheets/main.scss'

import registerServiceWorker from './registerServiceWorker'

import React from 'react'
import ReactDOM from 'react-dom'

import { createBrowserHistory } from 'history'
import { applyMiddleware, compose, createStore } from 'redux'
import logger from 'redux-logger'
import thunk from 'redux-thunk'
import { connectRouter, routerMiddleware, ConnectedRouter } from 'connected-react-router'

import { Provider } from 'react-redux'
import { Route, Switch, Redirect } from 'react-router'

import rootReducer from 'store'

import App from './App'
import Examples from 'scenes/Examples'
import Dashboard from 'scenes/Dashboard'
import ProtectedRoute from 'containers/ProtectedRoute'
import Header from '../src/components/header'
import Container from '../src/components/Container'

const history = createBrowserHistory()
const enhancedCompose = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = createStore(
  connectRouter(history)(rootReducer),
  enhancedCompose(
    applyMiddleware(
      logger,
      thunk,
      routerMiddleware(history),
    ),
  ),
)

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <App>
        <Container className="MainContainer">
          <Header />
          <Switch>
            <Route exact path="/" component={Examples} />
            <ProtectedRoute path="/protected" component={() => 'Protected content'} />
            <Route path="/dashboard" component={Dashboard} />
            <Route path='/error' render={() => 404} />
            <Redirect from='*' to='/error' />
          </Switch>
        </Container>
      </App>
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root'),
)

registerServiceWorker()
