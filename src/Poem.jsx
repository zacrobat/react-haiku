import React, {Component} from 'react';

class Poem extends Component {

  render () {
    return (
      <div>
        <ul>
          <li>{this.props.lineOne}</li>
          <li>2{this.props.lineTwo}</li>
          <li>3{this.props.lineThree}</li>
        </ul>
      </div>
    )
  }
}

export default Poem;
