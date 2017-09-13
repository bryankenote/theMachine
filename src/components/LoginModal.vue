<template>
  <modal :show="show" @close="close">
    <div class="modal-header">
      <h3>Login</h3>
    </div>
    <div class="modal-body">
      <label class="form-label">
        Username
        <input name="username" type="text" v-model="username" class="form-control" required>
      </label>
      <label class="form-label">
        Password
        <input name="password" type="password" v-model="password" class="form-control" required>
      </label>
    </div>
    <div class="modal-footer text-right">
      <button class="modal-default-button" @click.prevent="submitPost()">
        Login
      </button>
    </div>
  </modal>
</template>

<script>
import Modal from './Modal.vue';
import axios from 'axios';

export default {
  components: {
    'modal': Modal
  },
  props: ['show'],
  data () {
    return {
      username: '',
      password: ''
    };
  },
  methods: {
    close () {
      this.$emit('close');
      this.username = '';
      this.password = '';
    },
    submitPost () {
      if (this.username === '' || this.password === '') {
        alert('Please enter a username and password');
        return;
      }
      axios.post('http://localhost:3000/api/auth/login', {
        username: this.username,
        password: this.password
      }).then(res => {
        if (res.data.auth) {
          this.$store.commit('setToken', res.data.token);

          /* REFACTOR */
          switch (this.username) {
            case 'judge':
              this.$access('judge');
              break;
            case 'wj-man':
              this.$access('wj-man');
              break;
            default:
              break;
          }
          /* /REFACTOR */

          this.close();
          this.$router.push('dashboard');
        }
      });
    }
  }
};
</script>

<style scoped>
</style>
