import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

// We import bootstrap
// import bootstrap from 'bootstrap'; // from docs
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
