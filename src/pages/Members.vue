<template>
  <div class="dashboard">
  </div>
</template>

<script>
export default {
  data () {
    return {
      members: [
        {
          '_id': '5978ba88734d1d4610db6686',
          'fName': 'Habib',
          'lName': '???',
          'email': 'habib@gmail.com',
          'banksResolved': 0,
          'totalBanks': 0,
          'finesPaid': 0,
          'totalFines': 0
        },
        {
          '_id': '5988be36dbce080011023d69',
          'fName': 'test',
          'lName': 'test',
          'email': 'test@gmail.com',
          'totalFines': 0,
          'finesPaid': 0,
          'totalBanks': 2,
          'banksResolved': 0,
          '__v': 0
        }
      ]
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
