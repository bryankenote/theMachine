<template>
  <div class="members">
    <table id="member-table" class="member-table">
    <thead>
      <tr>
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
    </thead>
    <tbody id="member-table-body">
      <tr v-for="member in members" v-bind:key="member._id" class="member-row">
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
        <td class="total-banks-data data" contenteditable="true">{{ member.totalBanks }}</td>
        <td class="unresolved-banks-data data" contenteditable="true">{{ member.totalBanks - member.banksResolved }}</td>
        <td class="total-fines-data data" contenteditable="true">${{ member.totalFines }}</td>
        <td class="fines-owed-data data" contenteditable="true">${{ member.totalFines - member.finesPaid }}</td>
        <td>
          <button>
            <i class="fa fa-trash" aria-hidden="true"></i>
          </button>
        </td>
      </tr>
    </tbody>
  </table>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  computed: {
    ...mapGetters([
      'members',
      'banks',
      'fines'
    ])
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
table {
  border-collapse: collapse;
  width: 100%;
  margin-bottom: 20px;
}

th, td {
  text-align: left;
  padding: 5px;
}

.data:hover {
  /*border-bottom: 1px solid #5BC0DE;*/
  background-color: #5BC0DE;
}

tr {
  border-top: 1px solid #DDD;
}

textarea {
  max-width: 100%;
}

@media
only screen and (max-width: 768px),
(min-device-width: 768px) and (max-device-width: 1024px)  {

	table, thead, tbody, th, td, tr {
		display: block;
  }

  table {
    margin-top: 20px;
  }

	thead tr {
		position: absolute;
		top: -9999px;
		left: -9999px;
	}

	tr {
    border: 1px solid #ccc;
  }

	td {
    border: none;
		border-bottom: 1px solid #eee;
		position: relative;
		padding-left: 50%;
	}

	td:hover {
      background-color: transparent;
  }
	td:before {
		position: absolute;
		top: 6px;
		left: 6px;
		width: 45%;
		padding-right: 10px;
    white-space: nowrap;
	}

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
