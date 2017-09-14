<template>
  <div class="bank-feed">
    <h3>Bank Feed</h3>
    <router-link v-bind:to="'/banks/' + bank._id" v-for="bank in pagedBanks" v-bind:key="bank._id">
      <div class="bank-slip">
        <p>{{ bank.memberName }}</p>
        <p><span class="slip-label">Title: </span>{{ bank.title }}</p>
        <p><span class="slip-label">Issued On: </span>{{ bank.dateCreated }}</p>
      </div>
    </router-link>
    <button @click="page('prev')">Prev</button>
    <button @click="page('next')">Next</button>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
export default {
  data () {
    return {
      curBanks: [],
      curPage: 0,
      perPage: 5
    };
  },
  computed: {
    ...mapGetters([
      'banks'
    ]),
    pagedBanks () {
      const offset = this.curPage * this.perPage;
      return this.banks
      .sort((a, b) => a.dateCreated < b.dateCreated)
      .slice(offset, offset + this.perPage);
    }
  },
  methods: {
    ...mapActions([
      'getAllBanks'
    ]),
    page (dir) {
      if (dir === 'next' && this.curPage < Math.floor(this.banks.length / this.perPage)) {
        this.curPage++;
      } else if (dir === 'prev' && this.curPage > 0) {
        this.curPage--;
      }
    }
  },
  created () {
    this.getAllBanks();
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
