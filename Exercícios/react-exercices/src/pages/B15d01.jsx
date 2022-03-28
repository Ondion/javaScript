import React, { Component } from 'react';
import SideMenu from './SideMenu';
import { connect } from 'react-redux';

class B15d01 extends Component {
  render() {
    console.log(this.props);
    return (
      <>
        <SideMenu />
      </>
    );
  }
}

const mapProps = (state) => {
  return {
    propsObj: state.appReducer,
  }
};

// export default connect((state) => state)(B15d01);

export default connect(mapProps)(B15d01);
