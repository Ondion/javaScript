import React, { Component } from 'react';
import courseContext from '../context/courseContext';
import { nanoid } from 'nanoid'

class B17d01 extends Component {
  render() {
    const { services: { handleCount } } = this.context;
    const nano = nanoid(33);
    return (
      <courseContext.Consumer>
        {(value) => (
          <div>
            <p>{ value.chave }</p>
            <p>{ value.outraChave }</p>
            { value.array.map((e) => <p>{ e }</p>) }
            <p>{ value.count }</p>
            <button onClick={ handleCount }>Aqui</button>
            <p>{ nano }</p>
          </div>
        )}
      </courseContext.Consumer>
    );
  }
}

B17d01.contextType = courseContext;

export default B17d01;
