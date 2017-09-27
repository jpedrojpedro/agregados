const functions = require('firebase-functions')
const admin = require('firebase-admin')

admin.initializeApp(functions.config().firebase)

exports.addGuest = functions.https.onRequest((request, response) => {
  let eventName = request.query.eventName
  let convidados = admin.database().ref(`/development/${eventName}/convidados`)
  convidados.push({
    email: request.query.email,
    facebook: request.query.facebook,
    nome: request.query.nome,
    telefone: request.query.telefone
  })
  response.send('Ok!')
})
