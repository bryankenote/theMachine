<template>
  <footer>
    <div class="wrap">
      <hr />
    </div>
    <nav class="wrap">
        <ul class="left">
          <li>&#169; 2017 Antioch</li>
          <li><a href="#">Terms</a></li>
          <li><a href="#">Privacy</a></li>
          <li><a href="#">Security</a></li>
          <li><a href="#">Status</a></li>
          <li><a href="#">Help</a></li>
        </ul>
        <ul class="right">
          <li><a href="#">Contact Antioch</a></li>
          <li><a href="#">API</a></li>
          <li><a href="#">Training</a></li>
          <li><a href="#">Shop</a></li>
          <li><a href="#">Blog</a></li>
          <li><a href="#">About</a></li>
        </ul>
    </nav>
  </footer>
</template>

<script>
export default {
};
</script>

<style scoped>
  nav {
    display: flex;
    justify-content: space-between;

    list-style: none;
    padding: 5px 10px;
  }
  nav a {
    color: #777;
    text-decoration: none;
    padding: 0 5px;
  }
  ul {
    display: flex;
    justify-content: space-around;
  }
</style>
