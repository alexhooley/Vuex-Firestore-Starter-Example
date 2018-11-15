import firebase from '@firebase/app'
import '@firebase/firestore'

const config = {
  apiKey: 'YOURAPIKEY',
  authDomain: 'YOURAUTHDOMAIN.firebaseapp.com',
  databaseURL: 'https://YOURDATABASEURL.firebaseio.com',
  projectId: 'YOUR-PROJECT-ID',
  storageBucket: 'YOUR-STORAGE-BUCKET.appspot.com',
  messagingSenderId: 'YOURSENDERID'
}
const settings = {
  timestampsInSnapshots: true
}

firebase.initializeApp(config)
const db = firebase.firestore()
db.settings(settings)

export default db
