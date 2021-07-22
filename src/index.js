import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import './styles/App.min.css';
import App from './App';

console.clear();

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById('root'),
);
