<template>
  <feed :if="show" :header="'Upcoming Jobs (' + this.unresolvedJobs.length + ')'">
    <router-link v-bind:to="'/jobs/' + job._id" v-for="job in unresolvedJobs" v-bind:key="job._id">
      <div class="feed-el">
        <p>{{ job.memberName }}</p>
        <p><span class="feed-el-label">Title: </span>{{ job.title }}</p>
        <p><span class="feed-el-label">Issued On: </span>{{ job.dateCreated }}</p>
      </div>
    </router-link>
  </feed>
</template>

<script>
import Feed from './abstract/Feed.vue';
import { mapGetters, mapActions } from 'vuex';

export default {
  components: {
    'feed': Feed
  },
  computed: {
    ...mapGetters([
      'jobs'
    ]),
    unresolvedJobs () {
      return this.jobs
      .filter(job => !job.isResolved)
      .sort((a, b) => a.dateCreated < b.dateCreated);
    },
    show () {
      return this.unresolvedJobs.length > 0;
    }
  },
  methods: {
    ...mapActions([
      'getAllJobs'
    ])
  },
  created () {
    this.getAllJobs();
  }
};
</script>

<style scoped>
</style>
