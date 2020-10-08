import SocketIo from 'socket.io-client';
import config from '../config';

class Socket {
  constructor() {
    this.io = null;
  }

  init() {
    this.io = SocketIo(config.socket.url)
  }
}

export default new Socket();
