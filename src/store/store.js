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
    roulettes: [],
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
    roulettes (state) {
      return state.roulettes;
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
    setRoulettes (state, roulettes) {
      state.roulettes = roulettes;
    },
    setGroups (state, groups) {
      state.groups = groups;
    },
    addGroups (state, groups) {
      state.groups.concat(groups);
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
    getAllRoulettes (context) {
      roulette.getAll(this.getters.token, roulettes => {
        context.commit('setRoulettes', roulettes);

        let groups = [];
        roulettes.forEach(roulette => {
          groups = groups.concat(roulette.groups.filter(g => !g.completed));
        });
        context.commit('setGroups', groups);
      });
    },
    addGroups (context, state) {
      roulette.create(this.getters.token, { groups: state.groups }, groups => {
        context.commit('addGroups', groups);
        if (state.callback) {
          state.callback(groups);
        }
      });
    }
  }
});
