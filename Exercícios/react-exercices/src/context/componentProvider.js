import React, { Component } from 'react';
import courseContext from './courseContext';

class ComponentProvider extends Component {
  constructor(props) {
    super(props);

    this.handleCount = this.handleCount.bind(this);

    this.state = {
      chave: 'valor',
      outraChave: 'outroValor',
      array: [1, 2, 3, 4,],
      count: 0,
      services: {
        handleCount: this.handleCount, 
      }
    }
  }

  handleCount() {
    this.setState(({count}) => ({ count: count += 1}));
  }

  render() {
    const { state, props: { children } } = this;
    return (
      <courseContext.Provider value = {{ ...state }} >
        { children }
      </courseContext.Provider>
    );
  }
}

export default ComponentProvider;
