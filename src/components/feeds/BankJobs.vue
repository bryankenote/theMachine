<template>
  <feed :if="show" :header="'Upcoming Jobs (' + this.unresolvedBankJobs.length + ')'">
    <router-link v-bind:to="'/bank-jobs/' + bankJob._id" v-for="bankJob in unresolvedBankJobs" v-bind:key="bankJob._id">
      <div class="feed-el">
        <p>{{ bankJob.memberName }}</p>
        <p><span class="feed-el-label">Title: </span>{{ bankJob.jobName }}</p>
        <p><span class="feed-el-label">Due On: </span>{{ bankJob.dateDue }}</p>
      </div>
    </router-link>
  </feed>
</template>

<script>
import Feed from '../abstract/Feed.vue';
import { mapGetters, mapActions } from 'vuex';

export default {
  components: {
    'feed': Feed
  },
  computed: {
    ...mapGetters([
      'bankJobs'
    ]),
    unresolvedBankJobs () {
      return this.bankJobs
      .filter(bankJob => !bankJob.isResolved)
      .sort((a, b) => a.dateDue > b.dateDue);
    },
    show () {
      return this.unresolvedBankJobs.length > 0;
    }
  },
  methods: {
    ...mapActions([
      'getAllBankJobs'
    ])
  },
  created () {
    this.getAllBankJobs();
  },
  mounted () {
    console.log(this.bankJobs);
  }
};
</script>

<style scoped>
</style>
