import React from 'react';
import { socket, api } from '../services';

export class LoginCard extends React.Component {
  state = {
    login: '',
    password: '',

    showPage: false,
    showSendButton: false,

    activeToken: '',
  };


  vModel = (field) => ({
    onChange: (e) => this.setState(({ [field]: e.target.value })),
    value: this.state[field]
  });

  onClickConfirm = async () => {
    try {
      await api.request('post', 'users/login-confirm', {
        login: this.state.login,
        password: this.state.password,
      }, { token: this.state.activeToken });


      socket.io.on('auth-complete', () => {
        this.setState({ showPage: true });
      });
    } catch (e) {
      console.error(e);
      alert(e.message);
    }
  };

  onApply = async () => {
    try {
      const response = await api.request('post', 'users/login', {
        login: this.state.login,
        password: this.state.password,
      });

      if (!response.activeToken) return;

      socket.io.on('login-success', () => {
        this.setState({ showSendButton: true, activeToken: response.activeToken });
      });

      socket.io.emit('login', { token: response.activeToken });
    } catch (e) {
      console.error(e);
      alert(e.message);
    }
  };

  render() {
    return (
      <div className="border">
        <div>
          <div>
            <label>Login</label>
            <input {...this.vModel('login')}/>
          </div>

          <div>
            <label>Password</label>
            <input {...this.vModel('password')}/>
          </div>

          <div>
            <button onClick={this.onApply}>LOGIN</button>
          </div>
        </div>

        {this.state.showSendButton && <button onClick={this.onClickConfirm}>Send confirm message</button>}
        {this.state.showPage && <div><h1>HELLO FROM PROFILE</h1></div>}
      </div>
    );
  }
}
