<template>
  <div>
    <input type="text" v-model="search">
    <app-table>
      <tr slot="thead">
        <th></th>
        <th>First Name</th>
        <th>Last Name</th>
        <th>Completed</th>
        <th>Skipped</th>
        <th>Score</th>
        <th>
          <button class="add-to-table btn btn-success">
            <i class="fa fa-plus" aria-hidden="true"></i>
          </button>
        </th>
      </tr>
      <tr slot="tbody" v-for="member in displayingMembers" v-bind:key="member._id" class="member-row">
        <td><input type="checkbox"></td>
        <td class="fname-data data" contenteditable="true">{{ member.fName }}</td>
        <td class="lname-data data" contenteditable="true">{{ member.lName }}</td>
        <td class="data" contenteditable="true">{{ member.rouletteCompleted }}</td>
        <td class="data" contenteditable="true">{{ member.rouletteSkipped }}</td>
        <td>{{ getScore(member) }}</td>
        <td>
          <button>
            <i class="fa fa-trash" aria-hidden="true"></i>
          </button>
        </td>
      </tr>
    </app-table>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import appTable from '../components/abstract/AppTable.vue';

export default {
  components: {
    'app-table': appTable
  },
  data () {
    return {
      search: '',
      displayingMembers: ''
    };
  },
  watch: {
    'search': function () {
      if (this.search === '') {
        this.displayingMembers = this.members;
      } else {
        this.displayingMembers = this.members.filter(member => {
          return member.fName.toLowerCase().includes(this.search) ||
          member.lName.toLowerCase().includes(this.search);
        });
      }
    }
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
    }
  },
  created () {
    this.getAllMembers();
    this.displayingMembers = this.members;
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
