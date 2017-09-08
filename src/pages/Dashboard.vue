<template>
  <div class="dashboard">
    <div class="wrap">
      <bank-feed :banks="banks" />
    </div>
  </div>
</template>

<script>
import BankFeed from '../components/BankFeed.vue';

export default {
  components: {
    'bank-feed': BankFeed
  },
  data () {
    return {
      banks: [
        {
          '_id': '59b1b7f2426bf023e031bf76',
          'title': 'broke the table',
          'member': {
            '_id': '5988be36dbce080011023d69'
          },
          'memberName': 'test test',
          'severity': 5,
          'description': 'Broke the table while assaulting someone.',
          'imagePath': '',
          'dateResolved': null,
          'isResolved': false,
          'dateCreated': {
            '$date': '2017-09-07T21:19:46.424Z'
          },
          '__v': 0
        },
        {
          '_id': '59b1b801426bf023e031bf77',
          'title': 'test',
          'member': {
            '_id': '5988be36dbce080011023d69'
          },
          'memberName': 'test test',
          'severity': 3,
          'description': 'this is a test',
          'imagePath': '',
          'dateResolved': null,
          'isResolved': false,
          'dateCreated': {
            '$date': '2017-09-07T21:20:01.558Z'
          },
          '__v': 0
        }
      ]
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.dashboard {
  padding: 30px 0;
}
</style>
