<template>
  <div class="dashboard">
    <div class="wrap">
      <bank-feed />
    </div>
  </div>
</template>

<script>
import BankFeed from '../components/BankFeed.vue';

export default {
  components: {
    'bank-feed': BankFeed
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.dashboard {
  padding: 30px 0;
}
</style>
