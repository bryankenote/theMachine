<template>
  <header>
    <nav class="full-width">
      <div class="wrap">
        <div class="pages">
          <router-link to="/">BankApp</router-link>
          <router-link v-if="auth" to="/members">Manage Members</router-link>
        </div>
        <div class="user">
          <button v-if="!auth" @click="showRegisterModal">
            Register
          </button>
          <button v-if="!auth" @click="showLoginModal">
            Login
          </button>
          <button v-if="auth" @click.prevent="logout">Logout</button>
        </div>
      </div>
    </nav>

    <register-modal v-show="registerModal" @close="closeModal"/>
    <login-modal v-show="loginModal" @close="closeModal"/>
  </header>
</template>

<script>
import axios from 'axios';
import RegisterModal from '../components/RegisterModal.vue';
import LoginModal from '../components/LoginModal.vue';
// import { bus } from '../main';

export default {
  components: {
    'register-modal': RegisterModal,
    'login-modal': LoginModal
  },
  computed: {
    auth () {
      return this.$store.state.auth.token;
    }
  },
  data () {
    return {
      registerModal: false,
      loginModal: false
    };
  },
  methods: {
    closeModal () {
      this.registerModal = false;
      this.loginModal = false;
    },
    showRegisterModal () {
      this.registerModal = true;
      this.loginModal = false;
    },
    showLoginModal () {
      this.registerModal = false;
      this.loginModal = true;
    },
    logout () {
      axios.get('http://localhost:3000/api/auth/logout')
      .then(res => {
        if (!res.data.auth) {
          this.$store.commit('setToken', res.data.token);
          this.$access('unauth');
          this.$router.push('hello');
        }
      });
    }
  }
};
</script>

<style scoped>
  nav {
    background-color: #F8F8F8;
    border: 1px solid #E7E7E7;
    list-style: none;
    padding: 5px 10px;
  }
  nav, .wrap {
    display: flex;
    justify-content: space-between;
  }
  nav a {
    color: #777;
    text-decoration: none;
    padding: 0 5px;
  }
  button {
    background-color: transparent;
    border: none;
    color: #777;
    font-size: 1em;
  }
  button:hover {
    cursor: pointer;
  }
  button:focus {
    outline: none;
  }
</style>
