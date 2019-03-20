import React from 'react';
import ReactDOM from 'react-dom';
import Beers from './Beers.js'
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';

class App extends React.Component {
    render() {
        return(
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

ReactDOM.render(
    <App />,
    document.getElementById('root')
);
