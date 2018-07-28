jQuery(document).ready(function($){
	$('.login').on(
		'submit',
		function(e){
			e.preventDefault();

			var email = $('.login .email').val();
			var password = $('.login .password').val();

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
					window.location.href = ("calendario.html")

				})
				.catch(function(error) {
					alert('no eres bienvenido');
				});
			}
		}
		);	

	$('.registro').on(
		'submit',
		function(e){
			e.preventDefault();

			var email = $('.registro .email').val();
			var password = $('.registro .password').val();

			if(!email) {
				alert('debe ingresar un correo');
			}else if(!password){
				alert('debe ingresar una contraseña');
			}else{

				firebase
				.auth()
				.createUserWithEmailAndPassword(email, password)
				.then(function() {
					alert("creaste un usuario");
					window.location.href = ("calendario.html")




				})
				.catch(function(error) {
					alert("algo salio mal...");
				});
			}
		}
		);
});		