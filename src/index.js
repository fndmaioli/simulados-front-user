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
<<<<<<< HEAD
import Dashboard from 'scenes/Dashboard'
import Layout from 'components/Layout'
=======
import ProtectedRoute from 'containers/ProtectedRoute'
import ViewAnswers from 'scenes/ViewAnswers'
>>>>>>> answers screen added

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
<<<<<<< HEAD
        <Layout>
          <Switch>
            <Route exact path="/examples" component={Examples} />
            <Route path="/" component={Dashboard} />
            <Route path="/error" render={() => 404} />
            <Redirect from="*" to="/error" />
          </Switch>
        </Layout>
=======
        <Switch>
          <Route exact path="/" component={Examples} />
          <Route exact path="/resposta" component={ViewAnswers} />
          <ProtectedRoute
            path="/protected"
            component={() => 'Protected content'}
          />
          <Route render={() => 404} />
        </Switch>
>>>>>>> answers screen added
      </App>
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root'),
)

registerServiceWorker()
