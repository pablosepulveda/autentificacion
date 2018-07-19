jQuery(document).ready(function($){
	$('.login').on(
		'submit',
		function(e){
			e.preventDefault();

			var email = $('.login .email').val();
			alert(email); 
			var password = $('.login .password').val();
			alert(password);

			if(!email) {
				alert('debe ingresar un correo');
			}else if(!password){
				alert('debe ingresar una contraseña');
			}else{

				firebase
				.auth()
				.signInWithEmailAndPassword(email, password)
				.then(function() {
					alert('bienvenido');
				})
				.catch(function(error) {
					alert('no eres bienvenido');
				});
			};
		})

	$('.registrate').on(
		'submit',
		function(e){
			e.preventDefault();

			var email = $('.registrate .email').val();
			var password = $('.registrate .password').val();

			if(!email) {
				alert('debe ingresar un correo');
			}else if(!password){
				alert('debe ingresar una contraseña');
			}else{

				firebase
				.auth()
				.createUserWithEmailAndPassword(email, password)
				.then(function() {
					alert('creastes un nuevo usuario');
					console.log(email);
				})
				.catch(function(error) {
					alert('debes de nuevo');
				});
			};
		})
});