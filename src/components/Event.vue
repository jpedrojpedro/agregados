<script>
  import database from '../firebase/database'
  export default {
    name: 'app',
    firebase () {
      return {
        guests: database.ref('development/' + this.event.name + '/convidados'),
        tags: database.ref('development/' + this.event.name + '/tags')
      }
    },
    data () {
      let e = this.$route.path.substring(1)
      return {
        event: {
          name: e,
          link: "javascript:(function()%7Bvar%20fb%20%3D%20%22https%3A%2F%2Ffacebook.com%22%20%2B%20window.location.pathname%3Bvar%20name%20%3D%20document.querySelector('%23fb-timeline-cover-name').innerText%3Bvar%20url%20%3D%20%22https%3A%2F%2Fus-central1-agregados-311b9.cloudfunctions.net%2FaddGuest%22%3Bvar%20query%20%3D%20%22%3FeventName%3D" + e + "%26facebook%3D%22%20%2B%20fb%20%2B%20%22%26nome%3D%22%20%2B%20name%3Bvar%20fullurl%20%3D%20url%20%2B%20query%3Bvar%20img%20%3D%20document.createElement('img')%3Bimg.src%20%3D%20fullurl%3Bdocument.body.appendChild(img)%7D)()"
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
      <div class="col">
        <h2><a :href="event.link">Arraste para Bookmark</a></h2>
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
