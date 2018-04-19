<template>
  <div>
    <president-dash v-if="$can('president')"/>
  </div>
</template>

<script>
import presidentDash from '../components/roles/president/Dashboard.vue';

export default {
  components: {
    'president-dash': presidentDash
  }
};
</script>

<style scoped>
</style>
