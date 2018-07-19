  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyCpCetj4GYrpToBT7CPjJlOxhG3RckTpkI",
    authDomain: "horario-personalizado.firebaseapp.com",
    databaseURL: "https://horario-personalizado.firebaseio.com",
    projectId: "horario-personalizado",
    storageBucket: "",
    messagingSenderId: "82548544996"
  };
  firebase.initializeApp(config);

  //Agregamos la instalacion de la BD 
  const database = firebase.database();