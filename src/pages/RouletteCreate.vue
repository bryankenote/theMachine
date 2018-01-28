<template>
  <div class="RouletteCreate">
    <div v-show="groups.length <= 0">
      <div class="flex-container mtop mbottom">
        <input type="text" v-model="search" placeholder="Search Participants">
        <button @click="generate">Generate</button>
      </div>
      <member-table :search="search" :selected="selected" @memberClicked="toggleMember" />
    </div>
    <div v-show="groups.length > 0">
      <roulette-result :justCreated="true" :search="search" :groups="groups" @saveResult="save()" @trashResult="groups = []"/>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
import memberTable from '../components/tables/MemberTable.vue';
import rouletteResult from '../components/feeds/RouletteResult.vue';

export default {
  components: {
    'member-table': memberTable,
    'roulette-result': rouletteResult
  },
  data () {
    return {
      search: '',
      selected: [],
      groups: []
    };
  },
  methods: {
    ...mapActions([
      'addGroups'
    ]),
    toggleMember (member) {
      const index = this.selected.indexOf(member);
      if (index !== -1) {
        this.selected.splice(index, 1);
      } else {
        this.selected.push(member);
      }
    },
    shuffle () {
      for (let i = this.selected.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [this.selected[i], this.selected[j]] = [this.selected[j], this.selected[i]];
      }
    },
    generate () {
      this.groups = [];
      if (this.selected.length < 2) {
        alert('less than two people');
        return;
      }
      this.shuffle();
      for (let i = 0; i + 1 < this.selected.length; i += 2) {
        if (i !== this.selected.length - 3) {
          this.groups.push({
            member1: this.selected[i],
            member2: this.selected[i + 1],
            member3: null
          });
        } else {
          this.groups.push({
            member1: this.selected[i],
            member2: this.selected[i + 1],
            member3: this.selected[i + 2]
          });
        }
      }
    },
    save () {
      console.log(JSON.stringify(this.groups, null, 2));
      this.addGroups(this.groups);
      // this.$router.push('rouletteHistory');
    }
  }
};
</script>

<style scoped>
.mtop {
  margin-top: 15px;
}

.mbottom {
  margin-bottom: 15px;
}

.flex-container {
  justify-content: space-between;
}
</style>
