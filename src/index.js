import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './components/Login/Login.scss'
import './components/Login/Login'

import './components/App/App'
import './components/Live2DModels/live2dmodel.css';
import * as serviceWorker from './serviceWorker';
import Login from './components/Login/Login';

import Live2DModel from './components/Live2DModels/Live2DModel';

ReactDOM.render(
  <React.StrictMode>
     
    <Login />
    <Live2DModel />

  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
