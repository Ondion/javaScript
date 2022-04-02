import React, { Component } from 'react';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
import './App.css';
import MainPage from './pages/MainPage';
import B15d01 from './pages/B15d01';
import B15d02 from './pages/B15d02';
import B15d03 from './pages/B15d03';
import B15d03b from './pages/B15d03b';
import B15d04 from './pages/B15d04';

class App extends Component {
  constructor() {
    super();
    this.notfound = this.notfound.bind(this);
  }

  notfound() {
    return(
      <>
        <Link to='/'><h2>ERRO 404</h2></Link>
      </>
    )
  }

  render() {
    return (
      <Provider store={ store }>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" render={(r) => <MainPage { ...r }/> } />
            <Route exact path="/B15d01" render={(r) => <B15d01 { ...r }/> } />
            <Route exact path="/B15d02" render={(r) => <B15d02 { ...r }/> } />
            <Route exact path="/B15d03" render={(r) => <B15d03 { ...r }/> } />
            <Route exact path="/B15d03b" render={(r) => <B15d03b { ...r }/> } />
            <Route exact path="/B15d04" render={(r) => <B15d04 { ...r }/> } />
            <Route path="*" component={ this.notfound } />
          </Switch>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
