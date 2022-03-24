import React, { Component } from 'react';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import './App.css';
import MainPage from './pages/MainPage';
import B15d01 from './pages/B15d01';

class App extends Component {
  constructor() {
    super();
    this.notfound = this.notfound.bind(this);

  }

  notfound() {
    return(
      <>
        <Link to='/'><h2>ERRO 404 </h2></Link>
      </>
    )
  }

  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" render={(r) => <MainPage { ...r }/> } />
          <Route exact path="/B15d01" render={(r) => <B15d01 { ...r }/> } />

          <Route path="*" component={ this.notfound } />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
