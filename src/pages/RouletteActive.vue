<template>
  <div>
    <div class="flex-container mtop mbottom">
      <input type="text" v-model="search" placeholder="Search Participants">
    </div>
    <roulette-result :justCreated="false" :search="search" :groups="groupsAndNames" />
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import rouletteResult from '../components/feeds/RouletteResult.vue';

export default {
  components: {
    'roulette-result': rouletteResult
  },
  data () {
    return {
      search: ''
    };
  },
  computed: {
    ...mapGetters([
      'roulettes',
      'groups',
      'members'
    ]),
    groupsAndNames () {
      return this.groups.map(g => {
        return {
          member1: this.members.filter(m => m._id === g.member1)[0],
          member2: this.members.filter(m => m._id === g.member2)[0],
          member3: this.members.filter(m => m._id === g.member3)[0]
        };
      });
    }
  },
  methods: {
    ...mapActions([
      'getAllRoulettes',
      'getAllMembers'
    ])
  },
  created () {
    this.getAllRoulettes();
    this.getAllMembers();
  }
};
</script>

<style scoped>
.mtop {
  margin-top: 15px;
}
.mbottom{
  margin-bottom: 15px;
}
</style>
