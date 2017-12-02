import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxPromise from 'redux-promise';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Navbar from './components/navbar';
import PythonPage from './components/python';

const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);

ReactDOM.render(
    <BrowserRouter>
      <div>
        <Navbar/>
        <Switch>
          <Route path="/python" component={PythonPage}/>
        </Switch>
      </div>
    </BrowserRouter>,
  document.querySelector('#root'));
