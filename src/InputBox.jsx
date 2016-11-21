import React, {Component} from 'react';
import Poem from './Poem';

class InputBox extends Component {

  handleChange(e) {
    const lineOne = e.target.value;
    this.props.updateLine(lineOne);
  }

  render () {
    return (
      <div>
        <Poem lineOne={this.props.lineOne} />
        <input
          type="text"
          name="lineOne"
          value={this.props.lineOne}
          onChange={this.handleChange.bind(this)} />
      </div>
    )
  }
}

export default InputBox;
