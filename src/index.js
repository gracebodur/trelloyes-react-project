import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App.js';
import STORE from './components/store'

ReactDOM.render(<App store={STORE} />, document.getElementById('root'));
