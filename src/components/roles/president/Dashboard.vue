<template>
  <div class="dashboard">
    <h1>Dashboard</h1>
  </div>
</template>

<script>

export default {
};
</script>

<style scoped>
.flex-container {
  justify-content: space-around;
}
.flex-box {
  width: 30%;
  min-width: 200px;
}
.dashboard {
  padding: 30px 0;
}

@media (max-width: 768px) {
  .flex-container {
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  .flex-box {
    width: 80%;
  }
}
</style>
