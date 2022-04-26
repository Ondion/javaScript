import React from 'react';
import './App.css';
import Books from './components/Books';

function App(props) {
  console.log('APP props :>> ', props);
  return (
    <Books id={0}>
      {'ola'}
      {() => null}
    </Books>
  )
}

export default App;

// const teste = createElement('h2', {}, 'Também funfa!'); 