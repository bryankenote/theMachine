<template>
  <div class="form-helper">
    <form>
      <div id="form-header">
        <slot name="form-header"></slot>
      </div>
      <div id="form-fields">
        <slot name="form-fields"></slot>
      </div>
      <div id="form-controls">
        <slot name="form-controls"></slot>
      </div>
    </form>
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

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
