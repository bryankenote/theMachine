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
        <textarea name="description" v-model="description" class="form-control"></textarea>
      </label>

      <list-input :list="tasks">
        Tasks
      </list-input>

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
import { mapActions } from 'vuex';
import modal from '../abstract/Modal.vue';
import daySelector from '../inputs/DaySelector.vue';
import list from '../inputs/List.vue';

export default {
  components: {
    'modal': modal,
    'day-selector': daySelector,
    'list-input': list
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
  computed: {
    weekDayNames () {
      return this.week
      .filter(day => day.active)
      .map(day => day.name);
    }
  },
  methods: {
    ...mapActions([
      'addWorkJob'
    ]),
    close () {
      this.$emit('close');
      this.jobName = '';
      this.description = '';
      this.tasks = [];
      this.time = '';
      this.week.map(day => {
        day.active = false;
        return day;
      });
    },
    submitPost () {
      // console.log(this.jobName, this.description, this.tasks, this.time, this.weekDayNames);
      this.addWorkJob({
        jobName: this.jobName,
        description: this.description,
        tasks: this.tasks,
        time: this.time,
        days: this.weekDayNames
      });
      // this.close();
    }
  }
};
</script>

<style scoped>
textarea {
  min-height: 3em;
  min-width: 100%;
}
</style>
