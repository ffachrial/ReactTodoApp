import firebase from 'firebase';

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

  var firebaseRef = firebase.database().ref();

  firebaseRef.set({
    app: {
      name: 'Todo App',
      version: '1.0.0'
    },
    isRunning: true,
    user: {
      name: 'Firman',
      age: 42
    }
  }).then(() => {
    console.log('Set worked!');
  }, (e) => {
    console.log('Set failed');
  });

  var todosRef = firebaseRef.child('todos');

  todosRef.on('child_added', (snapshot) => {
    console.log('New todo added', snapshot.key, snapshot.val());
  });

  todosRef.push({
    text: 'Todo 1'
  });

  todosRef.push({
    text: 'Todo 2'
  });
  
  // var notesRef = firebaseRef.child('notes');
  //
  // notesRef.on('child_added', (snapshot) => {
  //   console.log('child_added', snapshot.key, snapshot.val());
  // });
  //
  // notesRef.on('child_changed', (snapshot) => {
  //   console.log('child_changed', snapshot.key, snapshot.val());
  // });
  //
  // notesRef.on('child_removed', (snapshot) => {
  //   console.log('child_removed', snapshot.key, snapshot.val());
  // });
  //
  // var newNoteRef = notesRef.push();
  //
  // newNoteRef.set({
  //   text: 'Walk the dog!'
  // });
  // console.log('Todo id', newNoteRef.key);

  // var logData = (snapshot) => {
  //   console.log('User ref changed', snapshot.val());
  // };
  //
  // firebaseRef.child('user').on('value', logData);
  //
  // firebaseRef.child('user').update({name: 'Grace'});
  //
  // firebaseRef.child('app').update({name: 'Something Else!'});

  // var logData = (snapshot) => {
  //   console.log('Got value', snapshot.val());
  // };
  //
  // firebaseRef.on('value', logData);

  // firebaseRef.off('value', logData);

  // firebaseRef.on('value', (snapshot) => {
  //   console.log('Got value', snapshot.val());
  // });
  //
  // firebaseRef.off();

  // firebaseRef.update({isRunning: false});

  // firebaseRef.child('app').once('value').then((snapshot) => {
  //   console.log('Got entire database', snapshot.key, snapshot.val());
  // }, (e) => {
  //   console.log('Unable to fetch value', e);
  // });

  // firebaseRef.once('value').then((snapshot) => {
  //   console.log('Got entire database', snapshot.val());
  // }, (e) => {
  //   console.log('Unable to fetch value', e);
  // });

  // firebaseRef.update({
  //   isRunning: null
  // });
  //
  // firebaseRef.child('user/age').remove();

  // firebaseRef.child('app').update({
  //   version: '2.0.0',
  //   name: null
  // });

  // firebaseRef.child('app/name').remove();

  // firebaseRef.update({
  //   'app/name': 'Todo Application',
  //   'user/name': 'Grace'
  // });

  // firebaseRef.child('app').update({
  //   name: 'Todo Application'
  // });
  //
  // firebaseRef.child('user').update({
  //   name: 'Grace'
  // });

  // firebaseRef.child('app').update({
  //   name: 'Todo Application'
  // }).then(() => {
  //   console.log('Update worked!');
  // }, (e) => {
  //   console.log('Update failed');
  // });

  // firebaseRef.update({
  //   isRunning: false,
  //   'app/name': 'My Todo App'
  // });

  // firebaseRef.set({
  //   appName: 'Todo Application'
  // });

  // firebaseRef.child('user').set({
  //   name: 'Grace'
  // });
  //
  // firebaseRef.child('app').set({
  //   name: 'Todo Application'
  // });
