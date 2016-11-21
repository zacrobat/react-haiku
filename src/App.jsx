import React, {Component} from 'react';
import './App.css';
import ButtonBox from './ButtonBox';
import InputBox from './InputBox';
import Poem from './Poem';
import SyllableCount from './SyllableCount';

class App extends Component {
  constructor() {
    super();
    this.state = {
      lineOne: "This is line one",
      lineTwo: "This is line two",
      lineThree: "This is line three",
    };
  }

  updateLine(lineOne) {
    this.setState({lineOne});
  }

  render() {
    return (
      <div className="App">
        <InputBox updateLine={this.updateLine.bind(this)} lineOne={this.state.lineOne}/>
        <SyllableCount />
        <ButtonBox />
      </div>
    );
  }
};

export default App;
