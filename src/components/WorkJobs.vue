<template>
  <app-table>
    <tr slot="thead" v-if="workJobs.length > 0">
      <th>Job</th>
      <th>Description</th>
      <th>Members</th>
      <th>Due</th>
    </tr>
    <tr slot="tbody" v-for="workJob in workJobs" v-bind:key="workJob._id">
      <router-link v-bind:to="'/work-jobs/' + workJob._id">
        <td class="data">{{ workJob.jobName }}</td>
        <td class="data">{{ workJob.description}}</td>
        <td class="data">{{ workJob.due }}</td>
        <td class="data">${{ getMembersForJob(workJob.members) }}</td>
      </router-link>
    </tr>
  </app-table>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import appTable from '../components/abstract/AppTable.vue';

export default {
  components: {
    'app-table': appTable
  },
  computed: {
    ...mapGetters([
      'members',
      'workJobs'
    ])
  },
  methods: {
    ...mapActions([
      'getAllMembers',
      'getAllWorkJobs'
    ])
  },
  getMembersForJob (workers) {
    return this.members.filter(member => workers.filter(worker => worker._id === member._id)[0]);
  },
  created () {
    this.getAllMembers();
    this.getAllWorkJobs();
  }
};
</script>

<style scoped>
@media
only screen and (max-width: 768px),
(min-device-width: 768px) and (max-device-width: 1024px)  {
	td:nth-of-type(1):before { content: "Job"; }
	td:nth-of-type(2):before { content: "Description"; }
	td:nth-of-type(3):before { content: "Due"; }
	td:nth-of-type(4):before { content: "Members"; }
}
</style>
