  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyBX0-sq4_BJEtji9wBXqtfFlfxhSXP4PyY",
    authDomain: "chat-ac687.firebaseapp.com",
    databaseURL: "https://chat-ac687.firebaseio.com",
    projectId: "chat-ac687",
    storageBucket: "chat-ac687.appspot.com",
    messagingSenderId: "1063673934533"
  };
  firebase.initializeApp(config);

  //Agregamos la instalacion de la BD 
  const database = firebase.database();