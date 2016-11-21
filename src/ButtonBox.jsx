import React, {Component} from 'react';
import Poem from './Poem';

class ButtonBox extends Component {

  handleChange(e) {
    const lineOne = e.target.value;
    this.props.updateLine(lineOne);
  }

  render () {
    return (
      <div>
        <button>Line One</button>
        <button>Line Two</button>
        <button>Line Three</button>
      </div>
    )
  }
}

export default ButtonBox;
