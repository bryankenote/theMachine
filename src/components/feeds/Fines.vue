<template>
  <feed :if="show" :header="'Pending Fines (' + owingMembers.length + ')'">
    <router-link v-bind:to="'/member/' + member._id" v-for="member in owingMembers" v-bind:key="member._id">
      <div class="feed-el">
        <p>{{ member.fName }} {{ member.lName }}</p>
        <p><span class="feed-el-label">Balance: </span>${{ member.totalFines - member.finesPaid }}</p>
      </div>
    </router-link>
  </feed>
</template>

<script>
import Feed from '../abstract/Feed.vue';
import { mapGetters, mapActions } from 'vuex';

export default {
  components: {
    'feed': Feed
  },
  computed: {
    ...mapGetters([
      'members'
    ]),
    owingMembers () {
      return this.members
      // filter out members with no balance
      .filter(m => m.totalFines > m.finesPaid)
      // sort by balance in descending order
      .sort((a, b) => (a.totalFines - a.finesPaid) < (b.totalFines - b.finesPaid));
    },
    show () {
      return this.owingMembers.length > 0;
    }
  },
  methods: {
    ...mapActions([
      'getAllMembers'
    ])
  },
  created () {
    this.getAllMembers();
  }
};
</script>

<style scoped>
</style>
