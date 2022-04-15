import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import courseContext from './context/courseContext';

ReactDOM.render(
  <courseContext.Provider value={{
    chave: 'valor',
    outraChave: 'outroValor',
    array: [1, 2, 3,],

  }}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </courseContext.Provider>,
  document.getElementById('root')
);
