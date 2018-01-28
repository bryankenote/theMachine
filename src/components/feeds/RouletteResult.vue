<template>
  <feed>
    <button v-if="justCreated" @click="save()">Save</button>
    <button v-if="justCreated" @click="back()">Back</button>
    <div class="feed-el" v-for="group in groups" :key="group.member1._id">
      <div class="member">
        <p>{{ group.member1.fName }} {{ group.member1.lName }}</p>
        <input v-if="!justCreated" type="checkbox" @click="toggleMember(group.member1)" checked>
      </div>
      <div class="member">
        <p>{{ group.member2.fName }} {{ group.member2.lName }}</p>
        <input v-if="!justCreated" type="checkbox" @click="toggleMember(group.member2)" checked>
      </div>
      <div v-if="group.member3" class="member">
        <p>{{ group.member3.fName }} {{ group.member3.lName }}</p>
        <input v-if="!justCreated" type="checkbox" @click="toggleMember(group.member3)" checked>
      </div>
      <button v-if="!justCreated" @click="checkoff(group)">Checkoff</button>
    </div>
  </feed>
</template>

<script>
import Feed from '../abstract/Feed.vue';

export default {
  props: ['groups', 'justCreated', 'search'],
  components: {
    'feed': Feed
  },
  computed: {
  },
  data () {
    return {
    };
  },
  methods: {
    checkoff (group) {
      console.log(JSON.stringify(group, null, 2));
    },
    back () {
      this.$emit('trashResult');
    },
    save () {
      this.$emit('saveResult');
    }
  },
  created () {
  }
};
</script>

<style scoped>
</style>
