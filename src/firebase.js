import * as firebase from 'firebase';

const config = {
    apiKey: "AIzaSyC3t9iwTYCEGIEL3hWc_0D4ojA9EqDiaHM",
    authDomain: "forms-test-d117f.firebaseapp.com",
    databaseURL: "https://forms-test-d117f.firebaseio.com",
    projectId: "forms-test-d117f",
    storageBucket: "forms-test-d117f.appspot.com",
    messagingSenderId: "261378517967"
};

firebase.initializeApp(config);
const database = firebase.database();
const googleAuth = new firebase.auth.GoogleAuthProvider();

export {
    firebase,
    database,
    googleAuth
}

/* database.ref().once('value')
    .then((snapshot) => {
        console.log(snapshot.val());
    })
    .catch((e) => {
        console.log(e);
    }) */

/* database.ref().on('value', (snapshot) => {
    console.log(snapshot.val());
});

setTimeout(() => {
    database.ref('name').set('name 1');
},3000)

setTimeout(() => {
    database.ref().off();
},4000)

setTimeout(() => {
    database.ref('name').set('name 2');
},5000) */

/* database.ref('users').orderByChild('age').limitToFirst(1).once('value')
    .then((snapshot) => {
        const users = [];

        snapshot.forEach((childSnapshot) => {
            users.push({
                id: childSnapshot.key,
                ...childSnapshot.val()
            });
        })
        console.log(users);
    })
    .catch((e) => {
        console.log(e);
    }); */

/* database.ref('users').orderByChild('lastname').equalTo('Romero').once('value')
    .then((snapshot) => {
        console.log(snapshot.val());
    }); */




