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
            /* REFACTOR */
            switch (this.username) {
              case 'judge':
                this.$access('judge');
                break;
              case 'wjmanager':
                this.$access('wjmanager');
                break;
              default:
                break;
            }
            /* /REFACTOR */

            this.close();
            this.$router.push('dashboard');
          }
        }
      });
    }
  }
};
</script>

<style scoped>
</style>
