import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    auth: {
      token: undefined
    }
  },
  getters: {
    token (state) {
      return state.auth.token;
    },
    banks (state) {
      return state.banks;
    }
  },
  mutations: {
    setToken (state, token) {
      state.auth.token = token;
    }
  },
  actions: {
    getAllBanks (context) {
      /*
      this.$http.get('http://localhost:3000/api/banks', {
        headers: {
          'x-access-token': this.state.auth.token
        }
      }).then(res => {
        this.state.banks = res.body;
      });
      */
    }
  }
});
