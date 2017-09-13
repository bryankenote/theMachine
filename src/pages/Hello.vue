<template>
  <div class="hello">
    <p>Welcome to BankApp</p>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  methods: {
    testAuth () {
      axios.get('http://localhost:3000/api/auth/me', {
        headers: {
          'x-access-token': this.$store.getters.token
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
