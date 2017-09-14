<template>
  <modal :show="show" @close="close">
    <div class="modal-header">
      <h3>Register</h3>
    </div>
    <div class="modal-body">
      <label class="form-label">
        Username
        <input name="username" type="text" v-model="username" class="form-control">
      </label>
      <label class="form-label">
        Email
        <input name="email" type="text" v-model="email" class="form-control">
      </label>
      <label class="form-label">
        Password
        <input name="password" type="password" v-model="password" class="form-control">
      </label>
      <label class="form-label">
        Repeat Password
        <input name="password2" type="password" v-model="password2" class="form-control">
      </label>
    </div>
    <div class="modal-footer text-right">
      <button class="modal-default-button" @click.prevent="submitPost()">
        Register
      </button>
    </div>
  </modal>
</template>

<script>
import Modal from './Modal.vue';
import api from '../api/api';

export default {
  components: {
    'modal': Modal
  },
  props: ['show'],
  data () {
    return {
      username: '',
      email: '',
      password: '',
      password2: ''
    };
  },
  methods: {
    close () {
      this.$emit('close');
      this.username = '';
      this.email = '';
      this.password = '';
      this.password2 = '';
    },
    submitPost () {
      if (this.username === '' || this.email === '' ||
      this.password === '' || this.password2 === '') {
        alert('Please enter a username and password.');
        return;
      } else if (this.password !== this.password2) {
        alert('Passwords do not match.');
        return;
      }
      api.register(this.username, this.email, this.password, res => {
        if (res.data.auth) {
          this.$store.commit('setToken', res.data.token);

          /* REFACTOR */
          switch (this.username) {
            case 'judge':
              this.$access('judge');
              break;
            case 'wj-man':
              this.$access('wjmanager');
              break;
            default:
              break;
          }
          /* /REFACTOR */

          this.close();
        }
      });
    }
  }
};
</script>

<style scoped>
</style>
