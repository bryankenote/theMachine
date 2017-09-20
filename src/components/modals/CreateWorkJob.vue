<template>
  <modal :show="show" @close="close">
    <div class="modal-header">
      <h3>Create Work Job</h3>
    </div>
    <div class="modal-body">
      <label class="form-label">
        Job Name
        <input name="name" type="text" v-model="jobName" class="form-control">
      </label>
      <label class="form-label">
        Job Description
        <input name="description" type="text" v-model="description" class="form-control">
      </label>
      <label class="form-label">
        Tasks
        <input name="tasks" type="password" class="form-control">
      </label>
      <label class="form-label">
        Time
        <input name="time" type="time" v-model="time" class="form-control">
      </label>

      <day-selector :week="week" />

    </div>
    <div class="modal-footer text-right">
      <button class="modal-default-button" @click.prevent="submitPost()">
        Create
      </button>
    </div>
  </modal>
</template>

<script>
import Modal from '../abstract/Modal.vue';
import daySelector from '../inputs/DaySelector.vue';

export default {
  components: {
    'modal': Modal,
    'day-selector': daySelector
  },
  props: ['show'],
  data () {
    return {
      jobName: '',
      description: '',
      tasks: [],
      time: '',
      week: [
        { name: 'sunday', active: false },
        { name: 'monday', active: false },
        { name: 'tuesday', active: false },
        { name: 'wednesday', active: false },
        { name: 'thursday', active: false },
        { name: 'friday', active: false },
        { name: 'saturday', active: false }
      ]
    };
  },
  methods: {
    close () {
      this.$emit('close');
      this.jobName = '';
      this.description = '';
      this.tasks = [];
      this.time = '';
    },
    submitPost () {
      console.log(this.jobName, this.description, this.tasks, this.time, this.week);
      // this.close();
    }
  }
};
</script>

<style scoped>
</style>
