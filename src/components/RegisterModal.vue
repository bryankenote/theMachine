<template>
  <modal :show="show" @close="close">
    <div class="modal-header">
      <h3>Register</h3>
    </div>
    <div class="modal-body">
      <label class="form-label">
        Username
        <input type="text" v-model="username" class="form-control">
      </label>
      <label class="form-label">
        Password
        <input type="password" v-model="password1" class="form-control">
      </label>
      <label class="form-label">
        Repeat Password
        <input type="password" v-model="password2" class="form-control">
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

export default {
  components: {
    'modal': Modal
  },
  props: ['show'],
  data () {
    return {
      username: '',
      password1: '',
      password2: ''
    };
  },
  methods: {
    close () {
      this.$emit('close');
      this.username = '';
      this.password1 = '';
      this.password2 = '';
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
