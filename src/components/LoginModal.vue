<template>
  <modal :show="show" @close="close">
    <div class="modal-header">
      <h3>Login</h3>
    </div>
    <div class="modal-body">
      <label class="form-label">
        Email
        <input name="email" type="text" v-model="email" class="form-control" required>
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
// import { bus } from '../main';

export default {
  components: {
    'modal': Modal
  },
  props: ['show'],
  data () {
    return {
      email: '',
      password: ''
    };
  },
  methods: {
    close () {
      this.$emit('close');
      this.email = '';
      this.password = '';
    },
    submitPost () {
      if (this.email === '' || this.password === '') {
        alert('Please enter a username and password');
        return;
      }
      this.$http.post('http://localhost:3000/api/auth/login', {
        email: this.email,
        password: this.password
      }).then(res => {
        this.$store.state.authenticated = res.body.auth;
        this.$store.state.token = res.body.token;
        // bus.$emit('authenticated', true);
        this.close();
      });
    }
  }
};
</script>

<style scoped>
</style>
