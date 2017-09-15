<template>
  <div class="dashboard flex-container">
    <bank-feed class="flex-box"/>
    <job-feed class="flex-box"/>
  </div>
</template>

<script>
import BankFeed from '../components/BankFeed.vue';
import JobFeed from '../components/JobFeed.vue';

export default {
  components: {
    'bank-feed': BankFeed,
    'job-feed': JobFeed
  }
};
</script>

<style scoped>
.dashboard {
  padding: 30px 0;
}
</style>
