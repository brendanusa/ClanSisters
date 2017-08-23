import React from 'react';
import pressed from './pressed.png';
import unpressed from './unpressed.png';

// Props:
// onClick: function that is executed when the button is pressed
// width: optional, can manually specify the width of the button

class GoogleButton extends React.Component {
  constructor (props) {
    super(props);
    this.onClick = this.onClick.bind(this);
    this.clickRelease = this.clickRelease.bind(this);
    this.style = {
      transition: 'background-color 0.218s, border-color 0.218s, box-shadow 0.218s',
      outline: 'none',
      borderRadius: '3px',
      WebkitFilter: 'drop-shadow(2px 2px 3px #555)'
    }
    if (this.props.width) {
      this.style.width = this.props.width.toString();
    }
    this.state = {
      imageSrc: unpressed
    };
  }

  onClick () {
    this.props.onClick();
    this.setState({imageSrc: pressed});
  }
  clickRelease () {
    this.setState({imageSrc: unpressed});
  }

  render () {
    return <input onMouseDown={this.onClick} onMouseUp={this.clickRelease} type='image' src={this.state.imageSrc} style={this.style} />
  }
}

export default GoogleButton;