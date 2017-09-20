<template>
  <div>
    <label class="form-label">
      Day
    </label>
    <label>
      S
      <input name="sunday" type="checkbox" v-bind:value="{ day: 'sunday' }" class="form-control">
    </label>
    <label>
      M
      <input name="monday" type="checkbox" v-bind:value="{ day: 'monday' }" class="form-control">
    </label>
    <label>
      T
      <input name="tuesday" type="checkbox" v-bind:value="{ day: 'tuesday' }" class="form-control">
    </label>
    <label>
      W
      <input name="wednesday" type="checkbox" v-bind:value="{ day: 'wednesday' }" class="form-control">
    </label>
    <label>
      T
      <input name="thursday" type="checkbox" v-bind:value="{ day: 'thursday' }" class="form-control">
    </label>
    <label>
      F
      <input name="friday" type="checkbox" v-bind:value="{ day: 'friday' }" class="form-control">
    </label>
    <label>
      S
      <input name="saturday" type="checkbox" v-bind:value="{ day: 'saturday' }" class="form-control">
    </label>
  </div>
</template>

<script>
export default {
  data () {
    return {
    };
  }
};
</script>

<style scoped>
</style>
