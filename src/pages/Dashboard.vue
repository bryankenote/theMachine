<template>
  <div>
    <president-dash v-if="$can('president')"/>
    <judge-dash v-if="$can('judge')"/>
    <wjmanager-dash v-if="$can('wjmanager')"/>
  </div>
</template>

<script>
import presidentDash from '../components/roles/president/Dashboard.vue';
import judgeDash from '../components/roles/judge/Dashboard.vue';
import wjmanagerDash from '../components/roles/wjmanager/Dashboard.vue';

export default {
  components: {
    'president-dash': presidentDash,
    'judge-dash': judgeDash,
    'wjmanager-dash': wjmanagerDash
  }
};
</script>

<style scoped>
</style>
