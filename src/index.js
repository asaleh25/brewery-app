import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'

class App extends React.Component {
    render() {
        return(
          <div className="test">
            Hello World
          </div>
        )
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
);
