import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router} from 'react-router-dom';


class App extends Component {
  render() {
    return (

      <Router basename={process.env.PUBLIC_URL}>
        <div className="App">
        <header className="App-header">
          <h1 className="App-title">Simple React App</h1>
        </header>
      </div>
    </Router>
    );
  }
}

export default App;