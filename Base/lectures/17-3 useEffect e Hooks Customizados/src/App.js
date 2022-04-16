import React from 'react';
import './App.css';
import Header from './components/Header';
import ISSLocation from './components/ISSLocation';
import IssProvider from './context/IssProvider';

function App() {
  return (
    <IssProvider>
      <div className="App">
        <Header />
        <ISSLocation />
      </div>
    </IssProvider>
  );
}

export default App;
