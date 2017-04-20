import firebase from 'firebase';

try {
  // Initialize Firebase
    var config = {
      apiKey: "AIzaSyA5mGyehqY0e_2ZVtl59h2_VwOdeiRZ11M",
      authDomain: "fachrial-todo-app.firebaseapp.com",
      databaseURL: "https://fachrial-todo-app.firebaseio.com",
      projectId: "fachrial-todo-app",
      storageBucket: "fachrial-todo-app.appspot.com",
      messagingSenderId: "1066448799960"
    };

    firebase.initializeApp(config);
} catch (e) {

}

export const firebaseRef = firebase.database().ref();
export default firebase;
