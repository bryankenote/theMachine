<template>
  <div>
    <app-table>
      <tr slot="thead">
        <th></th>
        <th>First Name</th>
        <th>Last Name</th>
        <th>Completed</th>
        <th>Skipped</th>
        <th>Score</th>
        <th>
          <button @click="addMember()">Add Participant</button>
        </th>
      </tr>
      <tr slot="tbody" v-for="member in members" v-show="searched(member)" :key="member._id" class="member-row">
        <td>
          <input type="checkbox" @click="toggleMember(member)">
        </td>
        <td>{{ member.fName }}</td>
        <td>{{ member.lName }}</td>
        <td>{{ member.rouletteCompleted }}</td>
        <td>{{ member.rouletteSkipped }}</td>
        <td>{{ getScore(member) }}</td>
        <td>
          <button @click="editMember(member)">
            Edit Participant
          </button>
        </td>
      </tr>
    </app-table>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import appTable from '../abstract/AppTable.vue';

export default {
  components: {
    'app-table': appTable
  },
  props: ['search', 'selected'],
  data () {
    return {
    };
  },
  computed: {
    ...mapGetters([
      'members'
    ])
  },
  methods: {
    ...mapActions([
      'getAllMembers'
    ]),
    getScore (member) {
      return member.rouletteCompleted - member.rouletteSkipped;
    },
    searched (member) {
      const fullName = member.fName + ' ' + member.lName;
      return this.search === '' ||
      fullName.toLowerCase().includes(this.search);
    },
    toggleMember (member) {
      this.$emit('memberClicked', member);
    },
    addMember () {
      console.log('add');
    },
    editMember (member) {
      console.log(JSON.stringify(member, null, 2));
    }
  },
  created () {
    this.getAllMembers();
  }
};
</script>

<style scoped>
@media
only screen and (max-width: 768px),
(min-device-width: 768px) and (max-device-width: 1024px)  {
	td:nth-of-type(1):before { content: "Select"; }
	td:nth-of-type(2):before { content: "First Name"; }
	td:nth-of-type(3):before { content: "Last Name"; }
	td:nth-of-type(4):before { content: "Completed"; }
	td:nth-of-type(5):before { content: "Skipped"; }
	td:nth-of-type(6):before { content: "Score"; }
  td:nth-of-type(9):before { content: "Delete"; }
}
</style>
