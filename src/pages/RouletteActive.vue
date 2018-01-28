<template>
  <div>
    <div class="flex-container mtop mbottom">
      <input type="text" v-model="search">
    </div>
    <roulette-result :justCreated="false" :search="search" :groups="groups" />
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
      'groups'
    ])
  },
  methods: {
    ...mapActions([
      'getAllGroups'
    ])
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
