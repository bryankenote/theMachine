<template>
  <modal :show="show" @close="close">
    <div class="modal-header">
      <h3>Login</h3>
    </div>
    <div class="modal-body">
      <label class="form-label">
        Username
        <input type="text" v-model="username" class="form-control">
      </label>
      <label class="form-label">
        Password
        <input type="password" v-model="password" class="form-control">
      </label>
    </div>
    <div class="modal-footer text-right">
      <button class="modal-default-button" @click="submitPost()">
        Login
      </button>
    </div>
  </modal>
</template>

<script>
import Modal from './Modal.vue';

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
      // Some save logic goes here...

      this.close();
    }
  }
};
</script>

<style scoped>
</style>
