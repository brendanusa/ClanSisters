import React from 'react';
import buttonImg from './button.png';

// Props:
// onClick: function that is executed when the button is pressed
// width: optional, can manually specify the width of the button

class SteamButton extends React.Component {
  constructor (props) {
    super(props);
    this.style = {
      transition: 'background-color 0.218s, border-color 0.218s, box-shadow 0.218s',
      outline: 'none',
      borderRadius: '3px',
      WebkitFilter: 'drop-shadow(2px 2px 3px #555)'
    }
    if (this.props.width) {
      this.style.width = this.props.width;
    }
  }

  render () {
    return <input onMouseDown={this.props.onClick} type='image' src={buttonImg} style={this.style} />
  }
}

export default SteamButton;