<script>
  export default {
    name: 'app',
    methods: {
      perform () {
        this.$router.push({
          name: 'Event',
          params: { 'event_name': this.myEvent.name }
        })
      }
    },
    data () {
      return {
        myEvent: {
          name: 'evento-teste'
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
    </div>
    <div class="row">
      <div class="col">
        <div class="form-inline">
          <label for="novoNome">jpedrojpedro.github.io/agregados/</label>&nbsp;
          <input type="text" id="novoNome" class="form-control" v-model="myEvent.name">&nbsp;
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
