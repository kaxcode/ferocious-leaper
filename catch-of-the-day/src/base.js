import Rebase from 're-base';
import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
  apiKey: 'AIzaSyBW9VxeIJXyBQ-A8YHYo5c_qDFPcw8v8EY',
  authDomain: 'ferocious-leaper.firebaseapp.com',
  databaseURL: 'https://ferocious-leaper.firebaseio.com'
});

const base = Rebase.createClass(firebaseApp.database());

// This is a named export
export { firebaseApp };

// this is a default export
export default base;
