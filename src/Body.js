import React from 'react';
import ReactDOM from 'react-dom';
import Beers from './Beers.js'

class Body extends React.Component {
  render() {
    return (
        <div>
          <div className="container">
            <h1>Beer Lookup</h1>
          </div>
          <div className="container">
            <Beers />
          </div>
        </div>
    )
  }
}

export default Body;
