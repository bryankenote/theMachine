<template>
  <app-table>
    <tr slot="thead">
      <th></th>
      <th>First Name</th>
      <th>Last Name</th>
      <th>Email</th>
      <th>Total Banks</th>
      <th>Unresolved Banks</th>
      <th>Total Fines</th>
      <th>Fines Owed</th>
      <th>
        <button class="add-to-table btn btn-success">
          <i class="fa fa-plus" aria-hidden="true"></i>
        </button>
      </th>
    </tr>
    <tr slot="tbody" v-for="member in members" v-bind:key="member._id" class="member-row">
      <td>
        <router-link v-bind:to="'/members/' + member._id">
          <button>
            <i class="fa fa-user" aria-hidden="true"></i>
          </button>
        </router-link>
      </td>
      <td class="fname-data data" contenteditable="true">{{ member.fName }}</td>
      <td class="lname-data data" contenteditable="true">{{ member.lName }}</td>
      <td class="email-data data" contenteditable="true">{{ member.email }}</td>
      <td class="total-banks-data data" contenteditable="true">{{ getTotalBanks(member._id) }}</td>
      <td class="unresolved-banks-data data" contenteditable="true">{{ getUnresolvedBanks(member._id) }}</td>
      <td class="total-fines-data data" contenteditable="true">${{ member.totalFines }}</td>
      <td class="fines-owed-data data" contenteditable="true">${{ member.totalFines - member.finesPaid }}</td>
      <td>
        <button>
          <i class="fa fa-trash" aria-hidden="true"></i>
        </button>
      </td>
    </tr>
</app-table>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import appTable from '../components/abstract/AppTable.vue';

export default {
  components: {
    'app-table': appTable
  },
  computed: {
    ...mapGetters([
      'members',
      'banks',
      // 'bankJobs',
      'fines'
    ])
  },
  methods: {
    ...mapActions([
      'getAllMembers',
      // 'getAllBankJobs',
      'getAllBanks'
    ]),
    getTotalBanks (memberId) {
      return this.banks
      .filter(bank => bank.member === memberId)
      .length;
    },
    getUnresolvedBanks (memberId) {
      return this.banks
      .filter(bank => bank.member === memberId && !bank.isResolved)
      .length;
    }
    /*
    ,
    getTotalJobs (memberId) {
      return this.bankJobs
      .filter(bankJob => bankJob.member === memberId)
      .length;
    },
    getUnresolvedJobs (memberId) {
      return this.bankJobs
      .filter(bankJob => bankJob.member === memberId && !bankJob.isResolved)
      .length;
    },
    getCompletedJobs (memberId) {
      return this.bankJobs
      .filter(bankJob => bankJob.member === memberId && bankJob.completed)
      .length;
    },
    getJobsNotCompleted (memberId) {
      return this.bankJobs
      .filter(bankJob => bankJob.member === memberId && !bankJob.completed)
      .length;
    }
    */
  },
  created () {
    this.getAllMembers();
    this.getAllBanks();
    // this.getAllBankJobs();
    // this.getAllFines();
  }
};
</script>

<style scoped>
@media
only screen and (max-width: 768px),
(min-device-width: 768px) and (max-device-width: 1024px)  {
	td:nth-of-type(1):before { content: "Member Details"; }
	td:nth-of-type(2):before { content: "First Name"; }
	td:nth-of-type(3):before { content: "Last Name"; }
	td:nth-of-type(4):before { content: "Email"; }
	td:nth-of-type(5):before { content: "Total Banks"; }
	td:nth-of-type(6):before { content: "Banks Resolved"; }
	td:nth-of-type(7):before { content: "Total Fines"; }
  td:nth-of-type(8):before { content: "Fines Owed"; }
  td:nth-of-type(9):before { content: "Delete"; }
}
</style>
