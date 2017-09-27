<template>
  <div id="app" class="container">
    <div class="row">
      <div class="col">
        <h1>AGREGADOS</h1>
      </div>
    </div>
    <div class="row">
      <div class="col">
        <div class="form-inline">
          <label for="novoNome">jpedrojpedro.github.io/agregados/</label>&nbsp;
          <input type="text" id="novoNome" class="form-control" v-model="my_event.name">&nbsp;
          <input type="submit" @click.pevent="perform()" class="btn btn-primary" value="Vai!">
        </div>
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
  import database from '../firebase/database'
  export default {
    name: 'app',
    firebase: {
      tags: database.ref('development')
    },
    methods: {
      perform () {
        console.log(this.my_event.name)
      }
    },
    data () {
      return {
        my_event: {
          name: 'evento-teste'
        }
      }
    }
  }
</script>

<style lang="scss">
  // Import Main styles for this application
  @import '../scss/style';
</style>
