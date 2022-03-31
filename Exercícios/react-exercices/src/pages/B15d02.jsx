import React, { Component } from 'react';
import { connect } from 'react-redux';
import SideMenu from './SideMenu';
import { change } from '../redux/actions';

class B15d02 extends Component {
  render() {
    const {B15d02: { test }, callDispatch } = this.props;
    return (
      <>
        <SideMenu />
        <div>
          <p>
            Esse Boolean veio via Redux e Props:
          </p>
            <h2>{`${test}`}</h2>
        </div>
        <button onClick={() => {
          callDispatch('valor teste 1', 'valor teste 2');
        }}>
          Trocar
        </button>
      </>
    );
  }
}

function mapStateToProps(state) {
  return state;
}

function mapDispatchToProps(dispatch){
  return {
    callDispatch: (send1, send2) => dispatch(change(send1, send2)),
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(B15d02);
