<template>
  <div class="member">
    <p>{{ member.fName }} {{ member.lName }}</p>
    <p>${{ finesForMember }}</p>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  computed: {
    ...mapGetters([
      'members',
      'fines'
    ]),
    finesForMember () {
      return this.fines
      // fines for member
      .filter(fine => fine.member === this.$route.params.id)
      // total fine
      .reduce((acu, fine) => acu + fine.amount, 0);
    },
    member () {
      return this.members.filter(member => member._id === this.$route.params.id)[0];
    }
  },
  methods: {
    ...mapActions([
      'getAllMembers',
      'getAllFines'
    ])
  },
  created () {
    this.getAllMembers();
    this.getAllFines();
  }
};
</script>

<style scoped>
</style>
