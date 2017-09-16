<template>
  <div class="member">
    <p>{{ member.fName }} {{ member.lName }}</p>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  computed: {
    ...mapGetters([
      'member'
    ])
  },
  methods: {
    ...mapActions([
      'getOneMember'
    ])
  },
  created () {
    this.getOneMember(this.$route.params.id);
  }
};
</script>

<style scoped>
</style>
