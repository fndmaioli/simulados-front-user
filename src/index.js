import 'slick-carousel/slick/slick.scss'
import 'slick-carousel/slick/slick-theme.scss'

import registerServiceWorker from './registerServiceWorker'

import React from 'react'
import ReactDOM from 'react-dom'

import { ConnectedRouter } from 'connected-react-router'
import { Provider } from 'react-redux'
import { Route, Switch } from 'react-router'
import { PersistGate } from 'redux-persist/integration/react'

import { store, persistor, history } from 'store/configureStore'

import App from './App'
import Examples from 'scenes/Examples'

import Result from 'scenes/Result'
import Dashboard from 'scenes/Dashboard'
import Layout from 'components/Layout'
import Simulados from 'scenes/Exam'
import Login from 'scenes/Login'
import Edition from 'scenes/Edition'
import Participations from 'scenes/Participations'
import ProtectedRoute from 'containers/ProtectedRoute'
import ViewAnswers from 'scenes/ViewAnswers'
import './stylesheets/main.scss'

ReactDOM.render(
  <Provider store={store}>
    <PersistGate persistor={persistor}>
      <ConnectedRouter history={history}>
        <App>
          <Switch>
            <Route path="/login" component={Login} />
            <Layout>
              <Route exact path="/examples" component={Examples} />
              <Route exact path="/resposta" component={ViewAnswers} />
              <ProtectedRoute exact path="/" component={Dashboard} />
              <Route exact path="/edicao" component={Edition} />
              <ProtectedRoute exact path="/simulado" component={Simulados} />
              <ProtectedRoute exact path="/resultado" component={Result} />
              <ProtectedRoute
                exact
                path="/meusexames"
                component={Participations}
              />
            </Layout>
            <Route path="*" render={() => 404} />
          </Switch>
        </App>
      </ConnectedRouter>
    </PersistGate>
  </Provider>,
  document.getElementById('root'),
)

registerServiceWorker()
