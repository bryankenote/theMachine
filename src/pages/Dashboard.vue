<template>
  <div>
    <judge-dash v-if="$can('judge')"/>
    <wjmanager-dash v-if="$can('wjmanager')"/>
  </div>
</template>

<script>
import judgeDash from '../components/roles/judge/Dashboard.vue';
import wjmanagerDash from '../components/roles/wjmanager/Dashboard.vue';

export default {
  components: {
    'judge-dash': judgeDash,
    'wjmanager-dash': wjmanagerDash
  }
};
</script>

<style scoped>
</style>
