import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.css'
import Header from './Header';
import Sidebar from './Sidebar';
import Content from './Content';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Header />
        <Sidebar />
        <Content />
      </BrowserRouter>
    );
  }
}

export default App;
