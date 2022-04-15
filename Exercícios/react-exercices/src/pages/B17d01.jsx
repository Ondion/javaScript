import React, { Component } from 'react';
import courseContext from '../context/courseContext';

class B17d01 extends Component {
  render() {
    console.log(this.context);
    return (
      <courseContext.Consumer>
        {(value) => (
          <div>
            <p>{ value.chave }</p>
            <p>{ value.outraChave }</p>
            { value.array.map((e) => <p>{ e }</p>) }
          </div>
        )}
      </courseContext.Consumer>
    );
  }
}

B17d01.contextType = courseContext;

export default B17d01;
