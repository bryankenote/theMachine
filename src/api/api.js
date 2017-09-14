const axios = require('axios');

const api = {
  apiUrl: 'http://localhost:3000/api',
  register (username, email, password, callback) {
    axios.post(this.apiUrl + '/auth/register', {
      username: username,
      email: email,
      password: password
    }).then(res => {
      callback(res);
    });
  },
  login (username, password, callback) {
    axios.post(this.apiUrl + '/auth/login', {
      username: username,
      password: password
    }).then(res => {
      callback(res);
    });
  },
  logout (callback) {
    axios.get(this.apiUrl + '/auth/logout')
    .then(res => {
      callback(res);
    });
  }
};

module.exports = api;
