import React, { Component } from 'react';
import { connect } from 'react-redux';

class B15d03b extends Component {
  render() {

    const { B15d03 } = this.props;

    return (
      <>
        <div>
          <h1>Informações Salvas:</h1>
          { Object.entries(B15d03).map((e) => <p>{`${e[0]}: ${e[1]}`}</p>)}
        </div>
      </>
    );
  }
}

function mapStateToProps(state) {
  return state;
}

export default connect(mapStateToProps)(B15d03b);
