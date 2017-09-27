<template>
  <div id="app" class="container">
    <div class="row">
      <div class="col">
        <h1>AGREGADOS</h1>
      </div>
      <div class="col">
        <h2>{{ name }}</h2>
      </div>
    </div>
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
      tags: database.ref('development/evento-teste')
    },
    data () {
      return {
        event: {
          name: ''
        }
      }
    }
  }
</script>

<style lang="scss">
  // Import Main styles for this application
  @import '../scss/style';
</style>
