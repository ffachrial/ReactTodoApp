import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import { Route, Router, IndexRoute, hashHistory} from 'react-router';

import TodoApp from 'TodoApp';
import TodoAPI from 'TodoAPI';
import Login from 'Login';

import * as actions from 'actions';
import {configure} from 'configureStore';

const store = configure();

store.dispatch(actions.startAddTodos());

// Load foundations
$(document).foundation();

// App css
require('style!css!sass!applicationStyles');

ReactDOM.render(
  <Provider store={store}>
    <Router history={hashHistory}>
      <Route path="/">
        <Route path="todos" component={TodoApp}/>
        <IndexRoute component={Login}/>
      </Route>
    </Router>
  </Provider>,
  document.getElementById('app')
);
