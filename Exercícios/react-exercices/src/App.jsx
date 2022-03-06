import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.css'
import Sidebar from './Sidebar';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Sidebar />
      </BrowserRouter>
    );
  }
}

export default App;
