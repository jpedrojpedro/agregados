<template>
  <div id="app" class="container">
    <div class="page-header">
      <h1>Vue.js 2 & Firebase <small>Sample Application by CodingTheSmartWay.com</small></h1>
    </div>
    <div class="panel panel-default">
      <div class="panel-heading">
        <h3 class="panel-title">Add New Books</h3>
      </div>
      <div class="panel-body">
        <form id="form" class="form-inline">
          <div class="form-group">
            <label for="novoNome">Nome:</label>
            <input type="text" id="novoNome" class="form-control" v-model="novoConvidado.nome">
          </div>
          <div class="form-group">
            <label for="novoEmail">Email:</label>
            <input type="text" id="novoEmail" class="form-control" v-model="novoConvidado.email">
          </div>
          <div class="form-group">
            <label for="novoTelefone">Telefone:</label>
            <input type="text" id="novoTelefone" class="form-control" v-model="novoConvidado.telefone">
          </div>
          <div class="form-group">
            <label for="novoFacebook">Url:</label>
            <input type="text" id="novoFacebook" class="form-control" v-model="novoConvidado.facebook">
          </div>
          <input type="submit" class="btn btn-primary" value="Add Book">
        </form>
      </div>
    </div>
    <div class="panel panel-default">
      <div class="panel-heading">
        <h3 class="panel-title">Book List</h3>
      </div>
      <div class="panel-body">
        <table class="table table-striped">
          <thead>
          <tr>
            <th>Title</th>
            <th>Author</th>
            <th></th>
          </tr>
          </thead>
          <tbody>
          <tr v-for="tag in tags">
            <td>{{tag.nome}}</td>
            <td><span class="glyphicon glyphicon-trash" aria-hidden="true"></span></td>
          </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
  import database from './firebase/database'
  export default {
    name: 'app',
    firebase: {
      tags: database.ref('evento_1/tags')
    },
    data () {
      return {
        novoConvidado: {
          email: '',
          telefone: '',
          nome: '',
          facebook: ''
        }
      }
    }
  }
</script>

<style>
  /* Import Font Awesome Icons Set */
  $fa-font-path: '~font-awesome/fonts/';
  @import '~font-awesome/css/font-awesome.min.css';
  /* Import Simple Line Icons Set */
  $simple-line-font-path: '~simple-line-icons/fonts/';
  @import '~simple-line-icons/css/simple-line-icons.css';
  /* Import Bootstrap Vue Styles */
  @import '~bootstrap-vue/dist/bootstrap-vue.css';
</style>

<!--<style lang="scss">-->
  <!--// Import Main styles for this application-->
  <!--@import './scss/style';-->
<!--</style>-->
