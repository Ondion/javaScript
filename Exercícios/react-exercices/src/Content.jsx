import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom'
import Home from './Home';
import DadJoke from './components/lifecycle/DadJoke';
import FetchJoke from './components/lifecycle/FetchJoke';
import FetchRickAndMorty from './components/lifecycle/FetchRickAndMorty';
import Lifecycle from './components/lifecycle/Lifecycle'
import LigaDesliga from './components/lifecycle/LigaDesliga'

class Content extends Component {
  render() {
    return (
      <section className='contentClass'>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/DadJoke' component={DadJoke} />
          <Route path='/FetchJoke' component={FetchJoke} />
          <Route path='/FetchRickAndMorty' component={FetchRickAndMorty} />
          <Route path='/Lifecycle' component={Lifecycle} />
          <Route path='/LigaDesliga' render={() => <LigaDesliga props={ 'props!' } />} />
          <Route path='*' render={() => '404'}/>
        </Switch>
      </section>
    );
  }
}

export default Content;
