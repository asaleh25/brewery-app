import React from 'react';
import ReactDOM from 'react-dom';
import Stylesheets from './Stylesheets.js';
import Body from './Body.js';
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';

class App extends React.Component {
    render() {
        return(
          <div>
            <Stylesheets />
            <Body />
          </div>
        )
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
);
