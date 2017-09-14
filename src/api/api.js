const axios = require('axios');

exports.auth = {
  apiUrl: 'http://localhost:3000/api/auth',

  register (username, email, password, callback) {
    axios.post(this.apiUrl + '/register', {
      username: username,
      email: email,
      password: password
    }).then(res => {
      callback(res);
    });
  },
  login (username, password, callback) {
    axios.post(this.apiUrl + '/login', {
      username: username,
      password: password
    }).then(res => {
      callback(res);
    });
  },
  logout (callback) {
    axios.get(this.apiUrl + '/logout')
    .then(res => {
      callback(res);
    });
  }
};

exports.banks = {
  apiUrl: 'http://localhost:3000/api/banks',

  getAllBanks (token, callback) {
    axios.get(this.apiUrl, {
      headers: {
        'x-access-token': token
      }
    }).then(res => {
      callback(res.data);
    });
  }
};
