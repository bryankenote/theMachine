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
    member (state) {
      return state.member;
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
    },
    setMembers (state, members) {
      state.members = members;
    },
    setBanks (state, banks) {
      state.banks = banks;
    },
    setJobs (state, jobs) {
      state.jobs = jobs;
    },
    setFines (state, fines) {
      state.fines = fines;
    }
  },
  actions: {
    getAllMembers (context) {
      members.getAll(this.getters.token, members => {
        context.commit('setMembers', members);
      });
    },
    getAllBanks (context) {
      banks.getAll(this.getters.token, banks => {
        context.commit('setBanks', banks);
      });
    },
    getAllJobs (context) {
      jobs.getAll(this.getters.token, jobs => {
        context.commit('setJobs', jobs);
      });
    },
    getAllFines (context) {
      fines.getAll(this.getters.token, fines => {
        context.commit('setFines', fines);
      });
    }
  }
});
