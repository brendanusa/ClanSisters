import React from 'react';
import axios from 'axios';
import SteamButton from '../components/SteamButton/index.jsx';

class Login extends React.Component {
  constructor(props) {
    super(props);
  }

  steamOpenIDRedirect () {
    window.location.href = '/auth/steam';
  }

  render() {
    return (
      <div className='center'>
        <h1>Login</h1>
        <SteamButton className='btn' onClick={this.steamOpenIDRedirect} width={200} />
      </div>
    ) 
  }
}

export default Login;