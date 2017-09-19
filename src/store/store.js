import Vue from 'vue';
import Vuex from 'vuex';
import { members, banks, bankJobs, workJobs, fines } from '../api/api';

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    auth: {
      token: undefined
    },
    members: [],
    banks: [],
    bankJobs: [],
    workJobs: [],
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
    bankJobs (state) {
      return state.bankJobs;
    },
    workJobs (state) {
      return state.workJobs;
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
    setBankJobs (state, bankJobs) {
      state.bankJobs = bankJobs;
    },
    setWorkJobs (state, workJobs) {
      state.workJobs = workJobs;
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
    getAllBankJobs (context) {
      bankJobs.getAll(this.getters.token, bankJobs => {
        context.commit('setBankJobs', bankJobs);
      });
    },
    getAllWorkJobs (context) {
      workJobs.getAll(this.getters.token, workJobs => {
        context.commit('setWorkJobs', workJobs);
      });
    },
    getAllFines (context) {
      fines.getAll(this.getters.token, fines => {
        context.commit('setFines', fines);
      });
    }
  }
});
