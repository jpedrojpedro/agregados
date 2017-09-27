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

<template>
  <div class="row">
    <!-- list all names -->
  </div>
</template>
