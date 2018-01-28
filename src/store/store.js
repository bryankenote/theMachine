import Vue from 'vue';
import Vuex from 'vuex';
import { auth, members, roulette } from '../api/api';

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    auth: {
      username: null,
      token: null
    },
    members: [],
    groups: []
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
    groups (state) {
      return state.groups;
    }
  },
  mutations: {
    setCredentials (state, credentials) {
      state.auth.username = credentials.username;
      state.auth.token = credentials.token;
    },
    setMembers (state, members) {
      state.members = members;
    },
    setGroups (state, groups) {
      state.groups = groups;
    },
    addGroup (state, group) {
      state.groups.push(group);
    }
  },
  actions: {
    register (context, state) {
      auth.register(state.username, state.email, state.password, res => {
        if (res.data.auth) {
          context.commit('setCredentials', { username: state.username, token: res.data.token });
        }
        state.callback(res.data.auth);
      });
    },
    login (context, state) {
      auth.login(state.username, state.password, res => {
        if (res.data.auth) {
          context.commit('setCredentials', { username: state.username, token: res.data.token });
        }
        state.callback(res.data.auth);
      });
    },
    logout (context, state) {
      auth.logout(res => {
        if (!res.data.auth) {
          context.commit('setCredentials', { username: null, token: null });
        }
        state.callback(res.data.auth);
      });
    },
    getAllMembers (context) {
      members.getAll(this.getters.token, members => {
        context.commit('setMembers', members);
      });
    },
    getAllGroups (context) {
      roulette.getAll(this.getters.token, groups => {
        context.commit('setGroups', groups);
      });
    },
    addGroup (context, group) {
      roulette.create(this.getters.token, group, group => context.commit('addGroup', group));
    }
  }
});
