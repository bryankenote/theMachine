<template>
  <div class="day-selector">
    <label class="form-label">
      Day
    </label>
    <div class="flex-container">
      <button v-for="day in week" :name="day.name" :value="day.name" :key="day.name" class="btn" @click="day.active = !day.active" :class="{active: day.active}">
        {{ day.name[0].toUpperCase() }}
      </button>
    </div>
  </div>
</template>

<script>
export default {
  props: ['week']
};
</script>

<style scoped>
.flex-container {
  justify-content: space-between;
}
.btn {
  background: transparent;
  border: none;
  border-radius: 100%;
  height: 30px;
  width: 30px;
}
.btn:hover {
  background: #DDD;
}
.btn:focus {
  outline: none;
}
/*
.btn:has(> input[type=checkbox]:checked) {
*/
.btn.active {
  background-color: #2c3e50;
  color: white;
}
</style>
