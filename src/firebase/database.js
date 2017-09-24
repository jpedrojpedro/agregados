import config from './config.js'
import Firebase from 'firebase'

let app = Firebase.initializeApp(config)

export default app.database()
