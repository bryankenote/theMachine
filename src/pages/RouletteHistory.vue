<template>
  <div>
    <input type="text" v-model="search">
    <roulette-history-table :search="search" />
  </div>
</template>

<script>
import rouletteHistoryTable from '../components/tables/RouletteHistoryTable.vue';

export default {
  components: {
    'roulette-history-table': rouletteHistoryTable
  },
  data () {
    return {
      search: ''
    };
  },
  methods: {
  }
};
</script>

<style scoped>
</style>
