import React, { Component } from 'react';
import Map, { Marker } from 'pigeon-maps';
import IssContext from '../context/IssContext';

class ISSLocation extends Component {
  componentDidMount() {
    const { fetchIssContext } = this.context;
    const threeSeconds = 3000;
    setInterval(() => {
      fetchIssContext();
    }, threeSeconds);
  }

  render() {
    const { latitude, longitude } = this.context;

    return (
      <main>
        <div className="map">
          <Map
            center={ [0, 0] }
            defaultWidth={ 450 }
            height={ 450 }
            minZoom={ 1.5 }
            maxZoom={ 8 }
            zoom={ 1.5 }
          >
            <Marker anchor={ [latitude, longitude] } />
          </Map>
        </div>
        {' '}

      </main>
    );
  }
}

ISSLocation.contextType = IssContext;

export default ISSLocation;
