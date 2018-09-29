import './stylesheets/main.scss'

import registerServiceWorker from './registerServiceWorker'

import React from 'react'
import ReactDOM from 'react-dom'

import { createBrowserHistory } from 'history'
import { applyMiddleware, compose, createStore } from 'redux'
import logger from 'redux-logger'
import thunk from 'redux-thunk'
import {
  connectRouter,
  routerMiddleware,
  ConnectedRouter,
} from 'connected-react-router'

import { Provider } from 'react-redux'
import { Route, Switch, Redirect } from 'react-router'

import rootReducer from 'store'

import App from './App'
import Examples from 'scenes/Examples'

import Dashboard from 'scenes/Dashboard'
import Layout from 'components/Layout'
import Simulados from 'scenes/Exam'
import Login from 'scenes/Login'
import ProtectedRoute from 'containers/ProtectedRoute'
import ViewAnswers from 'scenes/ViewAnswers'

const history = createBrowserHistory()
const enhancedCompose = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = createStore(
  connectRouter(history)(rootReducer),
  enhancedCompose(applyMiddleware(logger, thunk, routerMiddleware(history))),
)

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <App>
        <Switch>
          <Route exact path="/" component={Login} />
          <Layout>
            <Route exact path="/examples" component={Examples} />
            <ProtectedRoute exact path="/simulado" component={Simulados} />
            <Route exact path="/resposta" component={ViewAnswers} />
            <ProtectedRoute exact path="/dashboard" component={Dashboard} />
          </Layout>
          <Route exact path="*" render={() => 404} />
        </Switch>
      </App>
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root'),
)

registerServiceWorker()
