import React, {Component} from 'react';
import './App.css';
import InputBox from './InputBox';
import SyllableCount from './SyllableCount';

class App extends Component {
    render() {
        return (
          <div className="App">
              <h2>Haiku</h2>
              <SyllableCount />
              <InputBox />
          </div>
        );
    }
};

export default App;
