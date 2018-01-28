const axios = require('axios');
// const querystring = require('querystring');
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
  find (token, id, query, callback) {
    axios.get(state.url + '/find' + id, {
      headers: {
        'x-access-token': token
      },
      query
    }).then(res => {
      callback(res.data);
    });
  },
  create (token, data, callback) {
    // axios.post(state.url + '/', {
    axios({
      method: 'post',
      url: state.url + '/',
      headers: {
        'x-access-token': token
      },
      data: data
    }).then(res => {
      if (callback) {
        callback(res.data);
      }
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

exports.users = _.assign(
  {},
  crud({ url: 'http://localhost:3000/api/users' })
);

exports.members = _.assign(
  {},
  crud({ url: 'http://localhost:3000/api/members' })
);

exports.roulette = _.assign(
  {},
  crud({ url: 'http://localhost:3000/api/roulette' })
);

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
    }).catch(res => {
      /* complains that res.data is not defined */
      res.data = { auth: false, token: null };
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
