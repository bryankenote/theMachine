<template>
  <div class="bank-feed">
    <h3>Bank Feed</h3>
    <hr />
    <div class="scrollable">
      <router-link v-bind:to="'/banks/' + bank._id" v-for="bank in banks" v-bind:key="bank._id">
        <div class="bank-slip">
          <p>{{ bank.memberName }}</p>
          <p><span class="slip-label">Title: </span>{{ bank.title }}</p>
          <p><span class="slip-label">Issued On: </span>{{ bank.dateCreated }}</p>
        </div>
      </router-link>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
export default {
  computed: {
    ...mapGetters([
      'banks'
    ])
  },
  methods: {
    ...mapActions([
      'getAllBanks'
    ])
  },
  created () {
    this.getAllBanks();
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.bank-feed {
  width: 33%;
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
