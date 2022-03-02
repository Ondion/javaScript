import React, { Component } from 'react';

class LigaDesliga extends Component {
  constructor() {
    super();

    this.state = {
      seconds: 0,
      isVisible: true,
    }
    setInterval(() => {
      this.setState(({ seconds }) => ({seconds: seconds + 1}))
    }, 1000)
  }


  
  render() {
    const { seconds,  isVisible } = this.state;
    return (
      <>

        <div>
          <p>
            Timer: { seconds }
          </p>
        </div>
        {isVisible ?
          <button
            style={{color: 'white', backgroundColor: 'green'}}
            typeof='button'
            onClick={() => this.setState(({isVisible}) => ({isVisible: !isVisible}))}>
            ON
          </button>
        : 
          <button
            style={{color: 'white', backgroundColor: 'red'}}
            typeof='button'
            onClick={() => this.setState(({isVisible}) => ({isVisible: !isVisible}))}>
            OFF
          </button>
        }

      </>
    );
  }
}

export default LigaDesliga;
