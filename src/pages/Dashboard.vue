<template>
  <div>
    <judge-dash v-if="$can('judge')"/>
    <wjmanager-dash v-if="$can('wjmanager')"/>
  </div>
</template>

<script>
import judgeDash from '../components/judge/Dashboard.vue';
import wjmanagerDash from '../components/wjmanager/Dashboard.vue';

export default {
  components: {
    'judge-dash': judgeDash,
    'wjmanager-dash': wjmanagerDash
  }
};
</script>

<style scoped>
</style>
