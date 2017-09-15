<template>
  <div class="dashboard flex-container">
    <bank-feed class="flex-box"/>
    <job-feed class="flex-box"/>
    <fine-feed class="flex-box"/>
  </div>
</template>

<script>
import BankFeed from '../components/BankFeed.vue';
import JobFeed from '../components/JobFeed.vue';
import fineFeed from '../components/FineFeed.vue';

export default {
  components: {
    'bank-feed': BankFeed,
    'job-feed': JobFeed,
    'fine-feed': fineFeed
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

@media (max-width: 650px) {
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
