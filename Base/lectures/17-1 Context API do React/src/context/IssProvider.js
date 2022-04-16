import React from 'react';
import IssContext from './IssContext';
import getCurrentISSLocation from '../services/ISSApi';

class IssProvider extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      latitude: 123,
      longitude: 321,
    };

    this.fetchIssLocation = this.fetchIssLocation.bind(this);
  }

  async fetchIssLocation() {
    const { iss_position: issPosition } = await getCurrentISSLocation();
    this.setState({
      latitude: issPosition.latitude,
      longitude: issPosition.longitude,
    });
  }

  render() {
    const { children } = this.props;
    const contextValue = {
      ...this.state,
      fetchIssContext: this.fetchIssLocation,
    };
    return (
      <IssContext.Provider value={ contextValue }>
        {children}
      </IssContext.Provider>
    );
  }
}

export default IssProvider;
