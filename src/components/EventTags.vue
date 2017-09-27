<template>
  <div id="app" class="container">
    <div class="row">
      <!-- list all names -->
    </div>
  </div>
</template>

<script>
  import database from '../firebase/database'
  export default {
    name: 'app',
    firebase: {
      // needs to get dynamically
      tags: database.ref('development/evento-teste/tags')
    },
    data () {
      return {
        event: {
          tags: [
            ''
          ]
        }
      }
    }
  }
</script>

<style lang="scss">
  // Import Main styles for this application
  @import '../scss/style';
</style>
