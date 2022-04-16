import React from 'react';
import './App.css';
import Header from './components/Header';
import ISSLocation from './components/ISSLocation';
import IssProvider from './context/IssProvider';

class App extends React.Component {
  render() {
    return (
      <IssProvider>
        <div className="App">
          <Header />
          <ISSLocation />
        </div>
      </IssProvider>
    );
  }
}

export default App;
