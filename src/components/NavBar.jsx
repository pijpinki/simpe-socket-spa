import React from 'react';
import { socket } from '../services';

export class NavBar extends React.Component {
  state = {
    socketIsConnected: false,
  };

  componentDidMount() {
    socket.io.on('connect', () => {
      this.setState({ socketIsConnected: true });
    });

    socket.io.on('disconnect', () => {
      this.setState({ socketIsConnected: false });
    });
  }

  componentWillUnmount() {
    socket.io.off('connect');
    socket.io.off('disconnect');
  }

  render() {
    return (
      <div style={{ 'width': '100%' }}>
        <div>{this.state.socketIsConnected ? 'Connected' : 'Disconnected'}</div>
      </div>
    );
  }
}
