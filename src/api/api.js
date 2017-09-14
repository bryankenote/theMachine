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

exports.users = {
  apiUrl: 'http://localhost:3000/api/users',

  getAll (token, callback) {
    getAllCurried(this.apiUrl)(token, callback);
  }
};

exports.members = {
  apiUrl: 'http://localhost:3000/api/members',

  getAll (token, callback) {
    getAllCurried(this.apiUrl)(token, callback);
  }
};

exports.banks = {
  apiUrl: 'http://localhost:3000/api/banks',

  getAll (token, callback) {
    getAllCurried(this.apiUrl)(token, callback);
  }
};

exports.jobs = {
  apiUrl: 'http://localhost:3000/api/jobs',

  getAll (token, callback) {
    getAllCurried(this.apiUrl)(token, callback);
  }
};

exports.fines = {
  apiUrl: 'http://localhost:3000/api/fines',

  getAll (token, callback) {
    getAllCurried(this.apiUrl)(token, callback);
  }
};

let getAllCurried =
  url =>
    (token, callback) =>
      axios.get(url, {
        headers: {
          'x-access-token': token
        }
      }).then(res => {
        callback(res.data);
      });
