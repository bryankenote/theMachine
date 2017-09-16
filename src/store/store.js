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
    member: {},
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
    }
  },
  actions: {
    getAllMembers (context) {
      members.getAll(this.getters.token, members => {
        this.state.members = members;
      });
    },
    getOneMember (context, id) {
      members.getOne(this.getters.token, id, member => {
        this.state.member = member;
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
