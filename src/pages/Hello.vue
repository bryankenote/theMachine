<template>
  <div class="hello">
    <p>Welcome to BankApp</p>
  </div>
</template>

<script>
export default {
  methods: {
    testAuth () {
      this.$http.get('http://localhost:3000/api/auth/me', {
        headers: {
          'x-access-token': this.$store.state.token
        }
      }).then(res => {
        console.log('success: ', res);
      }, res => {
        console.log('error: ', res);
      });
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.hello {
  padding: 50px 0;
}
</style>
