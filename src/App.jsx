import React, {Component} from 'react';
import './App.css';
import Functional from './Functional';
import SyllableCount from './SyllableCount';

class App extends Component {
    render() {
        return (
          <div className="App">
              <h2>Haiku</h2>
              <SyllableCount />
          </div>
        );
    }
};

export default App;
