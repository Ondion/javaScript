import React, { Component } from 'react';
import HelloWorld from './HelloWorld';
import Header from './Header';
import Footer from './Footer';
import './App.css';

class App extends Component {
  render() {
    return (
      <>
        <Header />
        <HelloWorld />
        <Footer />
      </>
    )
  }
}

export default App;
