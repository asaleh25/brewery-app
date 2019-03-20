import React from 'react';
import ReactDOM from 'react-dom';
import Beers from './Beers.js'
import './index.css';

class App extends React.Component {
    render() {
        return(
          <div>
            <div className="test">
              Hello World
            </div>
            <Beers />
          </div>
        )
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
);
