<template>
  <app-table>
    <tr slot="thead">
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
/*
  members: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Member',
    required: false
  }],
  jobName: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  tasks: [{
    type: String
  }],
  dateCreated: {
    type: Date,
    default: Date.now
  },
  due: {
    type: Date,
    required: true
  }
*/
import { mapGetters, mapActions } from 'vuex';
import appTable from '../components/abstract/AppTable.vue';

export default {
  components: {
    'app-table': appTable
  },
  computed: {
    ...mapGetters([
      'members',
      'workJobs',
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
	td:nth-of-type(1):before { content: "Member Details"; }
	td:nth-of-type(2):before { content: "First Name"; }
	td:nth-of-type(3):before { content: "Last Name"; }
	td:nth-of-type(4):before { content: "Email"; }
	td:nth-of-type(5):before { content: "Total Banks"; }
	td:nth-of-type(6):before { content: "Banks Resolved"; }
	td:nth-of-type(7):before { content: "Total Fines"; }
  td:nth-of-type(8):before { content: "Fines Owed"; }
  td:nth-of-type(9):before { content: "Delete"; }
}
</style>
