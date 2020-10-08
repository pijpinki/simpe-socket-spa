import config from '../config';

class Api {
  constructor() {
    this.ENDPOINT = config.api.url;
  }

  async request(method, path, data, { token = '' } = {}) {
    const url = method.toLowerCase() !== 'get'
      ? `${this.ENDPOINT}${path}`
      : `${this.ENDPOINT}${path}?${new URLSearchParams(data)}`;

    const response = await fetch(url, {
      method, body: method.toLowerCase() === 'get' ? undefined : JSON.stringify(data),
      headers: {
        'content-type': 'application/json',
        'sec-fetch-dest': 'empty',
        'sec-fetch-mode': 'cors',
        'sec-fetch-site': 'cross-site',
        'access-token': token,
      },
      credentials: 'same-origin'
    });

    const body = await response.json();

    return body;
  }
}

export default new Api();
