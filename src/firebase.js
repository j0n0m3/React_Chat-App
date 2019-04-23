import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import 'firebase/storage';

// Initialize Firebase
var config = {
  apiKey: 'AIzaSyBEmYmp0FdkDHDKomc7B6JVejurezx57UU',
  authDomain: 'react-chat-9649a.firebaseapp.com',
  databaseURL: 'https://react-chat-9649a.firebaseio.com',
  projectId: 'react-chat-9649a',
  storageBucket: 'react-chat-9649a.appspot.com',
  messagingSenderId: '364860090938'
};
firebase.initializeApp(config);

export default firebase;
