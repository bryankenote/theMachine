const axios = require('axios');
const _ = require('lodash');

// composable crud
let crud = (state) => ({
  getAll (token, callback) {
    axios.get(state.url, {
      headers: {
        'x-access-token': token
      }
    }).then(res => {
      callback(res.data);
    });
  },
  getOne (token, id, callback) {
    axios.get(state.url + '/' + id, {
      headers: {
        'x-access-token': token
      }
    }).then(res => {
      callback(res.data);
    });
  },
  create (token, obj, callback) {
    axios.post(state.url + '/', {
      headers: {
        'x-access-token': token
      },
      obj
    }).then(res => {
      callback(res.data);
    });
  },
  update (token, id, callback) {
    axios.put(state.url + '/' + id, {
      headers: {
        'x-access-token': token
      }
    }).then(res => {
      callback(res.data);
    });
  },
  delete (token, id, callback) {
    axios.delete(state.url + '/' + id, {
      headers: {
        'x-access-token': token
      }
    }).then(res => {
      callback(res.data);
    });
  }
});

exports.auth = {
  url: 'http://localhost:3000/api/auth',

  register (username, email, password, callback) {
    axios.post(this.url + '/register', {
      username: username,
      email: email,
      password: password
    }).then(res => {
      callback(res);
    });
  },
  login (username, password, callback) {
    axios.post(this.url + '/login', {
      username: username,
      password: password
    }).then(res => {
      callback(res);
    });
  },
  logout (callback) {
    axios.get(this.url + '/logout')
    .then(res => {
      callback(res);
    });
  }
};

exports.users = _.assign(
  {},
  crud({ url: 'http://localhost:3000/api/users' })
);

exports.members = _.assign(
  {},
  crud({ url: 'http://localhost:3000/api/members' })
);

exports.banks = _.assign(
  {},
  crud({ url: 'http://localhost:3000/api/banks' })
);

exports.jobs = _.assign(
  {},
  crud({ url: 'http://localhost:3000/api/jobs' })
);

exports.fines = _.assign(
  {},
  crud({ url: 'http://localhost:3000/api/fines' })
);
