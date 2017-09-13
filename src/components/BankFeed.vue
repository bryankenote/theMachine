<template>
  <div class="bank-feed">
    <h3>Bank Feed</h3>
    <router-link v-bind:to="'/banks/' + bank._id" v-for="bank in banks" v-bind:key="bank._id">
      <div class="bank-slip">
        <p>{{ bank.memberName }}</p>
        <p><span class="slip-label">Title: </span>{{ bank.title }}</p>
        <p><span class="slip-label">Issued On: </span>{{ bank.dateCreated }}</p>
      </div>
    </router-link>
  </div>
</template>

<script>
export default {
  computed: {
    banks () {
      return this.$store.state.banks;
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.bank-feed {
  width: 30%;
}
.bank-slip {
  border: 1px solid #e3e3e3;
  margin: 10px;
  padding: 10px;
}
.slip-label {
  font-weight: bold;
}
a {
  color: #222;
  text-decoration: none;
}
</style>
