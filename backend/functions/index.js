const functions = require('firebase-functions')
const admin = require('firebase-admin')
let app = null

exports.addGuest = functions.https.onRequest((request, response) => {
  if (!app) {
    app = admin.initializeApp(functions.config().firebase)
  }
  let eventName = request.query.eventName
  let convidados = admin.database().ref(`/development/${eventName}/convidados/`)
  convidados.push({
    facebook: request.query.facebook,
    nome: request.query.nome
  })
  response.send('Ok!')
})

exports.myTest = functions.https.onRequest((request, response) => {
  response.send('Ok!')
})
