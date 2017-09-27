<script>
  import database from '../firebase/database'
  export default {
    name: 'app',
    firebase () {
      return {
        guests: database.ref('development' + this.event.name + '/convidados'),
        tags: database.ref('development' + this.event.name + '/tags')
      }
    },
    data () {
      return {
        event: {
          name: this.$route.path
        }
      }
    }
  }
</script>

<template>
  <div>
    <div class="row">
      <div class="col">
        <h1>AGREGADOS</h1>
      </div>
      <div class="col">
        <h2>Lista: {{ event.name }}</h2>
      </div>
    </div>
    <div class="row">
      <table class="table">
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>Facebook</th>
          <th>Telefone</th>
        </tr>
        <tr v-for="guest in guests">
          <td>{{ guest.nome }}</td>
          <td>{{ guest.email }}</td>
          <td>{{ guest.facebook }}</td>
          <td>{{ guest.telefone }}</td>
        </tr>
      </table>
    </div>
    <router-view></router-view>
  </div>
</template>
