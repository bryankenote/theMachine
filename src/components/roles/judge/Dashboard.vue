<template>
  <div class="dashboard">
    <h1>Judge</h1>
    <div class="flex-container">
      <bank-feed class="flex-box"/>
      <bank-job-feed class="flex-box"/>
      <fine-feed class="flex-box"/>
    </div>
  </div>
</template>

<script>
import bankFeed from '../../feeds/Banks.vue';
import bankJobFeed from '../../feeds/BankJobs.vue';
import fineFeed from '../../feeds/Fines.vue';

export default {
  components: {
    'bank-feed': bankFeed,
    'bank-job-feed': bankJobFeed,
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
