import React from 'react';
import { socket } from '../services';

export class LoginCard extends React.Component {
  state = {
    login: '',
    password: '',
  };

  onChange = (field) => (e) => {
    this.setState({ [field]: e.target.value });
  };

  onApply = () => {
    // todo make login request

    const response = { token: '123qqq' };

    socket.io.emit('login', { token: response.token } )
  }

  render() {
    return (
      <div style={{ 'width': '100%' }}>
        <div>
          <input placeholder='Login' value={this.state.login} onChange={this.onChange('login')}/>
          <input placeholder='Password' value={this.state.password} onChange={this.onChange('password')}/>
        </div>
      </div>
    );
  }
}
