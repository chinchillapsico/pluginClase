class casa {
	constructor(){
		this.puerta = 1;
		this.ventanas = 2;

	}
	ventilar(){
		console.log("se abre $(this.puerta) puerta y $(this.ventana) ventanas para ventilar")
	}
	entrar(){
		console.log("entro por  $(this.puerta) puerta")
	}
	salir(){
		console.log("salgo por  $(this.puerta) puerta")
	}
}