<template>
  <modal :show="show" @close="close">
    <div class="modal-header">
      <h3>Login</h3>
    </div>
    <div class="modal-body">
      <label class="form-label">
        Username
        <input name="username" type="text" v-model="username" class="form-control" v-on:keyup.enter="submitPost" required>
      </label>
      <label class="form-label">
        Password
        <input name="password" type="password" v-model="password" class="form-control" v-on:keyup.enter="submitPost" required>
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
import { mapActions } from 'vuex';
import Modal from '../abstract/Modal.vue';

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
    ...mapActions([
      'login'
    ]),
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
      this.login({
        username: this.username,
        password: this.password,
        callback: auth => {
          if (auth) {
            switch (this.username) {
              case 'president':
                this.$access('president');
                break;
              default:
                break;
            }

            this.close();
            this.$router.push('dashboard');
          } else {
            alert('The username or password provided was not valid');
          }
        }
      });
    }
  }
};
</script>

<style scoped>
</style>
