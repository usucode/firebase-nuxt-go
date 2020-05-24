import firebase from 'firebase'

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: 'AIzaSyDhI0TFxMzjviwQUDHHzn5A9scuhchMD_A',
  authDomain: 'auth-test-9f4d3.firebaseapp.com',
  databaseURL: 'https://auth-test-9f4d3.firebaseio.com',
  projectId: 'auth-test-9f4d3',
  storageBucket: 'auth-test-9f4d3.appspot.com',
  messagingSenderId: '2212336876',
  appId: '1:2212336876:web:ba92b591983142647801c9',
  measurementId: 'G-BP8R4BS7SE'
}
// Initialize Firebase
firebase.initializeApp(firebaseConfig)
firebase.analytics()
