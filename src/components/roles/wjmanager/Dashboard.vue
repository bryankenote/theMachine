<template>
  <div class="dashboard">
    <h1>Work Job Manager</h1>
    <button @click="showCreateModal = !showCreateModal">Create Job</button>
    <create-work-job-modal v-show="showCreateModal" @close="showCreateModal = false"/>
    <work-jobs />
  </div>
</template>

<script>
import workJobs from '../../tables/WorkJobs.vue';
import createWorkJobModal from '../../modals/CreateWorkJob.vue';

export default {
  components: {
    'work-jobs': workJobs,
    'create-work-job-modal': createWorkJobModal
  },
  data () {
    return {
      showCreateModal: false
    };
  }
};
</script>

<style scoped>
.flex-container {
  justify-content: space-around;
}
.flex-box {
  width: 30%;
  min-width: 200px;
}
.dashboard {
  padding: 30px 0;
}

@media (max-width: 768px) {
  .flex-container {
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  .flex-box {
    width: 80%;
  }
}
</style>
