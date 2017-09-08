<template>
  <div class="hello">
    <p>Welcome to BankApp</p>
  </div>
</template>

<script>
export default {
  data () {
    return {
      users: [
        {
          '_id': '597aac6df0cacc16aedae8a6',
          'username': 'test',
          'email': 'test@gmail.com',
          'password': '$2a$10$FEwUI0.C8Xr.1xh6t4TnoeNymNVEm80O0NIdMARXpRGttvrXSxXp2',
          '__v': 0
        }
      ]
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.hello {
  padding: 50px 0;
}
</style>
