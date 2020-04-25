import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'

if (!firebase.apps.length) {
  const config = {
    apiKey: "AIzaSyC0ifqHjfMhISE55qxOjgHRMWDab6RfRK8",
    authDomain: "slack-app-de82e.firebaseapp.com",
    databaseURL: "https://slack-app-de82e.firebaseio.com",
    projectId: "slack-app-de82e",
    storageBucket: "slack-app-de82e.appspot.com",
    messagingSenderId: "523280250248",
    appId: "1:523280250248:web:dcd3b287ca30241962f63d",
    measurementId: "G-2JJ7K1N2LH"
  }
  firebase.initializeApp(config)
}

const db = firebase.firestore()
export {
  firebase,
  db
}
