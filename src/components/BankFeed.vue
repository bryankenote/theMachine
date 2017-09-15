<template>
  <feed :if="show" :header="'Bank Feed'">
    <router-link v-bind:to="'/banks/' + bank._id" v-for="bank in unresolvedBanks" v-bind:key="bank._id">
      <div class="feed-el">
        <p>{{ bank.memberName }}</p>
        <p><span class="feed-el-label">Title: </span>{{ bank.title }}</p>
        <p><span class="feed-el-label">Issued On: </span>{{ bank.dateCreated }}</p>
      </div>
    </router-link>
  </feed>
</template>

<script>
import Feed from './abstract/Feed.vue';
import { mapGetters, mapActions } from 'vuex';

export default {
  components: {
    'feed': Feed
  },
  computed: {
    ...mapGetters([
      'banks'
    ]),
    unresolvedBanks () {
      return this.banks
      .filter(bank => !bank.isResolved)
      .sort((a, b) => a.dateCreated < b.dateCreated);
    },
    show () {
      return this.unresolvedBanks.length > 0;
    }
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
</style>
