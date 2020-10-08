import React from 'react'
import { api } from '../services'

export class RegisterPage extends React.Component {
  state = {
    login: '',
    name: '',
    email: '',
    password: '',
  }

  vModel = (field) => ({
    onChange: (e) => this.setState(({ [field]: e.target.value })),
    value: this.state[field]
  })

  onApply = async () => {
    try {
      const response = await api.request('post', 'users/register', {
        ...this.state
      })

      console.info(response);
    } catch (e) {
      console.error(e);
    }
  }

  render() {
    return (
      <div className="border">
        <input placeholder="Login" {...this.vModel('login')}/>
        <input placeholder="password" {...this.vModel('password')}/>
        <input placeholder="Email" {...this.vModel('email')}/>
        <input placeholder="Name" {...this.vModel('name')}/>
        <button onClick={this.onApply}>Apply</button>
      </div>
    )
  }
}
