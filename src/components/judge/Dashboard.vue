<template>
  <div class="dashboard">
    <h1>Judge</h1>
    <div class="flex-container">
      <bank-feed class="flex-box"/>
      <job-feed class="flex-box"/>
      <fine-feed class="flex-box"/>
    </div>
  </div>
</template>

<script>
import BankFeed from '../BankFeed.vue';
import JobFeed from '../JobFeed.vue';
import fineFeed from '../FineFeed.vue';

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
