import React, { Component } from 'react';
import { Map, Marker } from "pigeon-maps"
import { connect } from 'react-redux';
import { sendGPS } from '../redux/actions';

class B15d04 extends Component {
  constructor() {
    super();

    this.fetchFunction = this.fetchFunction.bind(this);

  }

  fetchFunction =  async () => {
    const { dispatch } = this.props;
    const responseAPI = await fetch('http://api.open-notify.org/iss-now.json');
    const responseJSON = await responseAPI.json();
    dispatch(sendGPS(responseJSON))
  };

  componentDidMount() {
    setInterval(() => this.fetchFunction(), 1234)
  };

  render() {
    const { iss_position: { longitude, latitude } } = this.props;
    return (
      <>
        <div className='mapClass'>
          <h1>{ `ISS Location: latitude: ${ latitude }, longitude: ${ longitude }` }</h1>
        <Map height={800} width={ 800 } defaultCenter={[latitude, longitude]} defaultZoom={5}>
          <Marker width={ 45 } anchor={[latitude, longitude]} />
        </Map>
        </div>
      </>
    );
  }
}

function mapStateToProps(state) {
  return state.B15d04;
}

export default connect(mapStateToProps)(B15d04);
