<template>
  <header>
    <nav class="full-width">
      <div class="wrap">
        <div class="pages">
          <router-link to="/">The Machine</router-link>
          <router-link v-if="token" to="/roulette">Roulette</router-link>
          <router-link v-if="token" to="/roulette-active">This Week</router-link>
          <router-link v-if="token" to="/roulette-history">History</router-link>
        </div>
        <div class="user">
          <button v-if="!token" @click="showRegisterModal">
            Register
          </button>
          <button v-if="!token" @click="showLoginModal">
            Login
          </button>
          <button v-if="token" @click.prevent="logoff">Logout</button>
        </div>
      </div>
    </nav>

    <register-modal v-show="registerModal" @close="closeModal" />
    <login-modal v-show="loginModal" @close="closeModal" />
  </header>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import RegisterModal from '../components/modals/Register.vue';
import LoginModal from '../components/modals/Login.vue';

export default {
  components: {
    'register-modal': RegisterModal,
    'login-modal': LoginModal
  },
  computed: {
    ...mapGetters([
      'token'
    ])
  },
  data () {
    return {
      registerModal: false,
      loginModal: false
    };
  },
  methods: {
    ...mapActions([
      'logout'
    ]),
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
    logoff () {
      this.logout({
        callback: auth => {
          if (!auth) {
            this.$access('unauth');
            this.$router.push('hello');
          }
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

nav,
.wrap {
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
