import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import bGen from './l_section';

function main() {
  return (
    ['valor teste 1', 'valor teste 2', 'valor teste 3'].map((e) => App(e))
  );
  
  App('valor');


}

ReactDOM.render(main(), document.getElementById('main'));
ReactDOM.render(bGen('10-1'), document.querySelector('.L_section'));
