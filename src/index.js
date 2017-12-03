import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxPromise from 'redux-promise';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Navbar from './components/navbar';
import JSPage from './components/javascript';
import JSExercise from './components/jsExercise'

const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);

ReactDOM.render(
    <BrowserRouter>
      <div>
        <Navbar/>
        <Switch>
          <Route path="/js/:id" component={JSExercise}/>
          <Route path="/js" component={JSPage}/>
        </Switch>
      </div>
    </BrowserRouter>,
  document.querySelector('#root'));
