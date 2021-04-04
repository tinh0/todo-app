import React from 'react';
import ReactDOM from 'react-dom';
import App from './app';

import 'bootstrap/dist/css/bootstrap.css';
import './styles/main.scss';
import { BrowserRouter } from 'react-router-dom';

import './index.css';

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);
