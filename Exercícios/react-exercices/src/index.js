import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Main from './Main'
import LadoA from './LadoA'
import LadoB from './LadoB'

ReactDOM.render(<App/>, document.getElementById('root'));

ReactDOM.render(<Main/>, document.querySelector('.main'));

ReactDOM.render(<LadoA/>, document.querySelector('.ladoA'));

ReactDOM.render(<LadoB/>, document.querySelector('.ladoB'));
