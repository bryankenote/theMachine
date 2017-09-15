import Vue from 'vue';
import Vuex from 'vuex';
import { members, banks, jobs, fines } from '../api/api';

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
    members (state) {
      return state.members;
    },
    banks (state) {
      return state.banks;
    },
    jobs (state) {
      return state.jobs;
    },
    fines (state) {
      return state.fines;
    }
  },
  mutations: {
    setToken (state, token) {
      state.auth.token = token;
    }
  },
  actions: {
    getAllMembers (context) {
      members.getAll(this.getters.token, members => {
        this.state.members = members;
      });
    },
    getAllBanks (context) {
      banks.getAll(this.getters.token, banks => {
        this.state.banks = banks;
      });
    },
    getAllJobs (context) {
      jobs.getAll(this.getters.token, jobs => {
        this.state.jobs = jobs;
      });
    },
    getAllFines (context) {
      fines.getAll(this.getters.token, fines => {
        this.state.fines = fines;
      });
    }
  }
});
