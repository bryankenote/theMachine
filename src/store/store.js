import Vue from 'vue';
import Vuex from 'vuex';
import { banks } from '../api/api';

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    auth: {
      token: undefined
    },
    members: [],
    banks: [],
    jobs: [],
    fines: []
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
      banks.getAll(this.getters.token, banks => {
        this.state.banks = banks;
      });
    }
  }
});
