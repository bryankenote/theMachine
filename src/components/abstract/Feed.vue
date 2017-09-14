<template>
  <div class="feed">
    <h3 class="feed-header">{{ header }}</h3>
    <hr />
    <div class="scrollable">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: ['header']
};
</script>

<style>
.feed-el {
  border: 1px solid #e3e3e3;
  margin: 10px;
  padding: 10px;
}
.feed-el-label {
  font-weight: bold;
}
</style>

<style scoped>
.feed {
  width: 33%;
}
a {
  color: #222;
  text-decoration: none;
}
.scrollable {
  height: 500px;
  overflow: auto;
}
::-webkit-scrollbar
{
  width: 6px;  /* for vertical scrollbars */
  height: 12px; /* for horizontal scrollbars */
}

::-webkit-scrollbar-track
{
  background: rgba(0, 0, 0, 0.1);
}

::-webkit-scrollbar-thumb
{
  background: rgba(0, 0, 0, 0.5);
}
</style>
