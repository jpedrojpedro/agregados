<template>
  <div id="app" class="container">
    <div class="row">
      <div class="col">
        <h1>AGREGADOS</h1>
      </div>
    </div>
    <div class="row">
      <div class="col">
        <form id="form" class="form-inline">
          <div class="form-group">
            <label for="novoNome">jpedrojpedro.github.io/agregados/</label>&nbsp;
            <input type="text" id="novoNome" class="form-control" v-model="event.name">&nbsp;
            <input type="submit" class="btn btn-primary" value="Vai!">
          </div>
        </form>
      </div>
    </div>
    <div class="row">
      <div class="col">
        <h3 class="panel-title">Instruções:</h3>
        <ul>
          <li>Não precisa logar 😱&nbsp; basta usar a URL</li>
          <li>Não precisa salvar 😱&nbsp; as modificações são salvas automaticamente</li>
          <li>Use Agregados 🚀</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
  import database from './firebase/database'
  export default {
    name: 'app',
    firebase: {
      tags: database.ref('development')
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
  @import './scss/style';
</style>
